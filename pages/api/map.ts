// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { uniqueId as uniqId } from 'lodash';
import { MapData } from '@govhack/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MapData>
) {
  res.status(200).json({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'CUMBERLAND',
          DAILY_AVG: 13.1,
          cluster: false,
          GENERAL_SUPPLY: '101,905',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.84232996, 151.2839989].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'GEORGES RIVER',
          DAILY_AVG: 14.6,
          cluster: false,
          GENERAL_SUPPLY: '269,980',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.964, 150.981].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'HORNSBY',
          DAILY_AVG: 18.2,
          cluster: false,
          GENERAL_SUPPLY: '301,328',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.70244, 151.09931].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'HUNTERS HILL',
          DAILY_AVG: 21.8,
          cluster: false,
          GENERAL_SUPPLY: '41,256',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.8166634, 151.1333328].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'INNER WEST',
          DAILY_AVG: 11.7,
          cluster: false,
          GENERAL_SUPPLY: '349,231',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.902097, 151.175712].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'KU-RING-GAI',
          DAILY_AVG: 21.8,
          cluster: false,
          GENERAL_SUPPLY: '321,931',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.621874, 151.245131].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'LANE COVE',
          DAILY_AVG: 15.5,
          cluster: false,
          GENERAL_SUPPLY: '88,120',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.749997, 151.1499994].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'LANE COVE',
          DAILY_AVG: 15.5,
          cluster: false,
          GENERAL_SUPPLY: '88,120',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.83333, 151.249999].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'NORTH SYDNEY',
          DAILY_AVG: 11.7,
          cluster: false,
          GENERAL_SUPPLY: '164,683',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.839, 151.2072].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'NORTHERN BEACHES',
          DAILY_AVG: 16,
          cluster: false,
          GENERAL_SUPPLY: '563,225',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.816, 151.184].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'PARRAMATTA',
          DAILY_AVG: 11.4,
          cluster: false,
          GENERAL_SUPPLY: '78,614',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.80899676, 151.0006667].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'RANDWICK',
          DAILY_AVG: 12.6,
          cluster: false,
          GENERAL_SUPPLY: '267,170',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.916663, 151.249999].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'RYDE',
          DAILY_AVG: 13.8,
          cluster: false,
          GENERAL_SUPPLY: '233,141',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.80916343, 151.1006663].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'STRATHFIELD',
          DAILY_AVG: 14.2,
          cluster: false,
          GENERAL_SUPPLY: '78,334',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.8718, 151.09433].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'SUTHERLAND',
          DAILY_AVG: 18.9,
          cluster: false,
          GENERAL_SUPPLY: '508,842',
        },
        geometry: {
          type: 'Point',
          coordinates: [-34.0333332, 151.0499998].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'SYDNEY',
          DAILY_AVG: 10,
          cluster: false,
          GENERAL_SUPPLY: '403,913',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.85597991, 151.2066658].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'WAVERLEY',
          DAILY_AVG: 13,
          cluster: false,
          GENERAL_SUPPLY: '158,137',
        },
        geometry: {
          type: 'Point',
          coordinates: [-37.8833298, 145.166666].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'WILLOUGHBY',
          DAILY_AVG: 14.9,
          cluster: false,
          GENERAL_SUPPLY: '161,838',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.80166346, 151.1928326].reverse(),
        },
      },
      {
        type: 'Feature',
        properties: {
          // id: uniqId() + Math.random(),
          LGA: 'WOOLLAHRA',
          DAILY_AVG: 18.9,
          cluster: false,
          GENERAL_SUPPLY: '185,504',
        },
        geometry: {
          type: 'Point',
          coordinates: [-33.8833298, 151.249999].reverse(),
        },
      },
    ],
  });
}
