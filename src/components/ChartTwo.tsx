import React from 'react';
import { VictoryAxis, VictoryStack, VictoryBar, VictoryChart } from 'victory';
import { LINE_TWO_COLOR } from '@govhack/constants';

const myDataset = [
  [
    { x: 'a', y: 1 },
    { x: 'b', y: 2 },
    { x: 'c', y: 3 },
    { x: 'd', y: 2 },
    { x: 'e', y: 1 },
  ],
  [
    { x: 'a', y: 2 },
    { x: 'b', y: 3 },
    { x: 'c', y: 4 },
    { x: 'd', y: 5 },
    { x: 'e', y: 5 },
  ],
  [
    { x: 'a', y: 1 },
    { x: 'b', y: 2 },
    { x: 'c', y: 3 },
    { x: 'd', y: 4 },
    { x: 'e', y: 4 },
  ],
];

class ChartTwo extends React.Component {
  // This is an example of a function you might use to transform your data to make 100% data
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map(data => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100 };
      });
    });
  }

  render() {
    const dataset = this.transformData(myDataset);
    return (
      <div>
        <VictoryChart height={300} width={400} domainPadding={{ x: 30, y: 10 }}>
          <VictoryStack colorScale={['black', LINE_TWO_COLOR, '#F1f1f1']}>
            {dataset.map((data, i) => {
              return <VictoryBar data={data} key={i} />;
            })}
          </VictoryStack>
          <VictoryAxis dependentAxis tickFormat={tick => `${tick}%`} />
          <VictoryAxis tickFormat={['a', 'b', 'c', 'd', 'e']} />
        </VictoryChart>
      </div>
    );
  }
}

export default ChartTwo;
