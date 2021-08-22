import React from 'react';
import { Text } from '@chakra-ui/react';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryClipContainer,
  VictoryAxis,
} from 'victory';
import {
  BILL_DATA,
  LINE_TWO_COLOR,
  BALANCE_LINE_COLOR,
} from '@govhack/constants';

const forecastData = [
  ['September', 76.91528, 'decrease'],
  ['October', 78.2378, 'increase'],
  ['November', 77.57654, 'decrease'],
  ['December', 77.67284, 'increase'],
];

class ChartForecast extends React.Component {
  render() {
    const data = [
      ...BILL_DATA.flatMap(data => ({
        x: data.DATE.toLocaleString('default', {
          month: 'short',
          // year: '2-digit',
        }),
        y: data.properties.BILL,
      })),
    ];
    const months = [...data.map(d => d.x), 'Oct', 'Nov', 'Dec'];
    // console.log('months', months);
    // debugger;

    return (
      <div>
        <VictoryChart theme={VictoryTheme.material} height={300}>
          <VictoryLine
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
            }
            style={{
              data: {
                stroke: LINE_TWO_COLOR,
                strokeWidth: 5,
                strokeLinecap: 'round',
              },
            }}
            data={data}
          />
          <VictoryLine
            interpolation="natural"
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
            }
            style={{
              data: {
                stroke: '#000',
                strokeWidth: 5,
                strokeLinecap: 'round',
              },
            }}
            data={[
              {
                x: 'Sep',
                y: BILL_DATA[BILL_DATA.length - 1].properties.BILL,
              },
              { x: 'Oct', y: 78.2378 },
              { x: 'Nov', y: 77.57654 },
              // { x: 'Dec', y: 77.67284 },
            ]}
          />
          <VictoryAxis
            style={{
              axisLabel: { fontSize: 10, padding: 0 },
              tickLabels: { fontSize: 10, padding: 4 },
            }}
            dependentAxis
            tickFormat={tick => `${tick}kWh`}
          />
          <VictoryAxis
            style={{
              axisLabel: { fontSize: 10, padding: 0 },
              tickLabels: { fontSize: 10, padding: 4 },
            }}
            tickFormat={months}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default ChartForecast;
