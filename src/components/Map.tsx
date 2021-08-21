import React from 'react';
import { Text, Flex, FlexboxProps, Heading } from '@chakra-ui/react';
import { GUTTER_WIDTH } from '@govhack/constants';
import mapboxgl from 'mapbox-gl';
import { Head } from 'next/document';
import { dataFetcher } from '@govhack/utils';
import useSWR from 'swr';

interface Props {}

const Map: React.FC<Props> = ({ children }) => {
  const [newMap, setMap] = React.useState<mapboxgl.Map | undefined>();
  const pageIsMounted = React.useRef<boolean>();
  const { data, error } = useSWR('/api/map', dataFetcher);

  mapboxgl.accessToken =
    'pk.eyJ1IjoidGV3dGF3YW4iLCJhIjoiY2tzbGxtcndnMHhqcjJ2cGN4ZmNwdnd2aiJ9.R3U0u48b9OGaNHroO__7eg';

  React.useEffect(() => {
    pageIsMounted.current = true;

    return () => {
      pageIsMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (!pageIsMounted) return;

    const newMap = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/tewtawan/cksllpfm08r9817och29fwr9f',
      center: [-77.02, 38.887],
      zoom: 12.5,
      pitch: 45,
      maxBounds: [
        [-77.875588, 38.50705], // Southwest coordinates
        [-76.15381, 39.548764], // Northeast coordinates
      ],
    });
    if (newMap) {
      initializeMap(mapboxgl, newMap);
      setMap(newMap);
    }
  }, []);

  React.useEffect(() => {
    if (newMap && pageIsMounted && data) {
      newMap.on('load', () => {
        addDataLayer(newMap, data);
      });
    }
  }, [pageIsMounted, setMap, data, newMap]);

  return (
    <Flex pos="relative">
      <Flex
        pos="absolute"
        left={0}
        top={0}
        bottom={0}
        zIndex="sticky"
        height="86vh"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          m={GUTTER_WIDTH}
          borderRadius="lg"
          borderWidth="1px"
          p={GUTTER_WIDTH}
          shadow="md"
          bg="white"
        >
          {children}
        </Flex>
      </Flex>
      <div id="my-map" style={{ height: '86vh' }} />;
    </Flex>
  );
};

function initializeMap(mapbox: any, map: any) {
  map.on('click', 'data', e => {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['data'],
    });
    var clusterId = features[0].properties.cluster_id;
    map
      .getSource('dcmusic.live')
      .getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
        });
      });
  });

  map.on('click', 'unclustered-point', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var mag = e.features[0].properties.mag;
    var tsunami;
    if (e.features[0].properties.tsunami === 1) {
      tsunami = 'yes';
    } else {
      tsunami = 'no';
    }
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    new mapbox.Popup()
      .setLngLat(coordinates)
      .setHTML('magnitude: ' + mag + '<br>Was there a tsunami?: ' + tsunami)
      .addTo(map);
  });
  map.addControl(
    new mapbox.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  map.on('mouseenter', 'data', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'data', function () {
    map.getCanvas().style.cursor = '';
  });
}

function addDataLayer(map, data) {
  if (!map.getSource('dcmusic.live')) {
    map.addSource('dcmusic.live', {
      type: 'geojson',
      data: data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
      clusterProperties: {
        sum: ['+', ['get', 'event_count']],
      },
    });
  } else {
    map.getSource('dcmusic.live').setData(data);
  }

  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'dcmusic.live',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': 'rgb(229, 36, 59)',
      'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
      'circle-opacity': 0.75,
      'circle-stroke-width': 4,
      'circle-stroke-color': '#fff',
      'circle-stroke-opacity': 0.5,
    },
  });

  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'dcmusic.live',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{sum}',
      'text-font': ['Open Sans Bold'],
      'text-size': 16,
    },
    paint: {
      'text-color': 'white',
    },
  });

  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'dcmusic.live',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-radius': ['step', ['get', 'event_count'], 20, 100, 30, 750, 40],
      'circle-color': 'rgb(229, 36, 59)',
      'circle-opacity': 0.75,
      'circle-stroke-width': 4,
      'circle-stroke-color': '#fff',
      'circle-stroke-opacity': 0.5,
    },
  });

  map.addLayer({
    id: 'event-count',
    type: 'symbol',
    source: 'dcmusic.live',
    filter: ['!', ['has', 'point_count']],
    layout: {
      'text-field': '{event_count}',
      'text-font': ['Open Sans Bold'],
      'text-size': 16,
    },
    paint: {
      'text-color': 'white',
    },
  });
}

export default Map;
