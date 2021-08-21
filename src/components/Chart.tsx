import {
  LABEL_COLOR,
  FONT_SIZE,
  LINE_ONE_COLOR,
  LINE_TWO_COLOR,
  BALANCE_LINE_COLOR,
} from '@govhack/constants';
import React from 'react';
import { VictoryLine, VictoryAxis, VictoryLabel } from 'victory';

const Chart = () => {
  const getDataSetOne = () => {
    return [
      { x: new Date(2000, 1, 1), y: 12 },
      { x: new Date(2000, 6, 1), y: 10 },
      { x: new Date(2000, 12, 1), y: 11 },
      { x: new Date(2001, 1, 1), y: 5 },
      { x: new Date(2002, 1, 1), y: 4 },
      { x: new Date(2003, 1, 1), y: 6 },
      { x: new Date(2004, 1, 1), y: 5 },
      { x: new Date(2005, 1, 1), y: 7 },
      { x: new Date(2006, 1, 1), y: 8 },
      { x: new Date(2007, 1, 1), y: 9 },
      { x: new Date(2008, 1, 1), y: -8.5 },
      { x: new Date(2009, 1, 1), y: -9 },
      { x: new Date(2010, 1, 1), y: 5 },
      { x: new Date(2013, 1, 1), y: 1 },
      { x: new Date(2014, 1, 1), y: 2 },
      { x: new Date(2015, 1, 1), y: -5 },
    ];
  };

  const getDataSetTwo = () => {
    return [
      { x: new Date(2000, 1, 1), y: 5 },
      { x: new Date(2003, 1, 1), y: 6 },
      { x: new Date(2004, 1, 1), y: 4 },
      { x: new Date(2005, 1, 1), y: 10 },
      { x: new Date(2006, 1, 1), y: 12 },
      { x: new Date(2007, 2, 1), y: 48 },
      { x: new Date(2008, 1, 1), y: 19 },
      { x: new Date(2009, 1, 1), y: 31 },
      { x: new Date(2011, 1, 1), y: 49 },
      { x: new Date(2014, 1, 1), y: 40 },
      { x: new Date(2015, 1, 1), y: 21 },
    ];
  };

  const getTickValues = () => {
    return [
      new Date(1999, 1, 1),
      new Date(2000, 1, 1),
      new Date(2001, 1, 1),
      new Date(2002, 1, 1),
      new Date(2003, 1, 1),
      new Date(2004, 1, 1),
      new Date(2005, 1, 1),
      new Date(2006, 1, 1),
      new Date(2007, 1, 1),
      new Date(2008, 1, 1),
      new Date(2009, 1, 1),
      new Date(2010, 1, 1),
      new Date(2011, 1, 1),
      new Date(2012, 1, 1),
      new Date(2013, 1, 1),
      new Date(2014, 1, 1),
      new Date(2015, 1, 1),
      new Date(2016, 1, 1),
    ];
  };

  const getStyles = () => {
    return {
      parent: {
        // background: '#ccdee8',
        boxSizing: 'border-box',
        display: 'inline',
        padding: 0,
        // fontFamily: "'Fira Sans', sans-serif",
      },
      title: {
        textAnchor: 'start',
        verticalAnchor: 'end',
        fill: LABEL_COLOR,
        fontFamily: 'inherit',
        fontSize: FONT_SIZE,
        fontWeight: 'bold',
      },
      labelNumber: {
        textAnchor: 'middle',
        fill: LABEL_COLOR,
        fontFamily: 'inherit',
        fontSize: FONT_SIZE,
      },

      // INDEPENDENT AXIS
      axisYears: {
        axis: { stroke: 'black', strokeWidth: 1 },
        ticks: {
          size: ({ tick }) => {
            const tickSize = tick.getFullYear() % 5 === 0 ? 10 : 5;
            return tickSize;
          },
          stroke: 'black',
          strokeWidth: 1,
        },
        tickLabels: {
          fill: 'black',
          fontFamily: 'inherit',
          fontSize: FONT_SIZE,
        },
      },

      // DATA SET ONE
      axisOne: {
        grid: {
          stroke: ({ tick }) => (tick === -10 ? 'transparent' : LABEL_COLOR),
          strokeWidth: 2,
        },
        axis: { stroke: LABEL_COLOR, strokeWidth: 0 },
        ticks: { strokeWidth: 0 },
        tickLabels: {
          fill: LABEL_COLOR,
          fontFamily: 'inherit',
          fontSize: FONT_SIZE,
        },
      },
      labelOne: {
        fill: LABEL_COLOR,
        fontFamily: 'inherit',
        fontSize: FONT_SIZE,
        fontStyle: 'italic',
      },
      lineOne: {
        data: { stroke: LINE_ONE_COLOR, strokeWidth: 4.5 },
      },
      axisOneCustomLabel: {
        fill: LABEL_COLOR,
        fontFamily: 'inherit',
        fontWeight: 300,
        fontSize: FONT_SIZE,
      },

      // DATA SET TWO
      axisTwo: {
        axis: { stroke: LABEL_COLOR, strokeWidth: 0 },
        tickLabels: {
          fill: LABEL_COLOR,
          fontFamily: 'inherit',
          fontSize: FONT_SIZE,
        },
      },
      labelTwo: {
        textAnchor: 'end',
        fill: LABEL_COLOR,
        fontFamily: 'inherit',
        fontSize: FONT_SIZE,
        fontStyle: 'italic',
      },
      lineTwo: {
        data: { stroke: LINE_TWO_COLOR, strokeWidth: 4.5 },
      },

      // HORIZONTAL LINE
      lineThree: {
        data: { stroke: BALANCE_LINE_COLOR, strokeWidth: 2 },
      },
    };
  };

  const styles = getStyles();
  const dataSetOne = getDataSetOne();
  const dataSetTwo = getDataSetTwo();
  const tickValues = getTickValues();

  return (
    <svg style={styles.parent} viewBox="0 0 450 350">
      <VictoryLabel
        x={25}
        y={55}
        style={styles.labelOne}
        text={'Consumption and growth rate'}
      />
      <VictoryLabel
        x={425}
        y={55}
        style={styles.labelTwo}
        text={'Growth rate'}
      />

      <g transform={'translate(0, 40)'}>
        {/* Add shared independent axis */}
        <VictoryAxis
          scale="time"
          standalone={false}
          style={styles.axisYears}
          tickValues={tickValues}
          tickFormat={x => {
            if (x.getFullYear() === 2000) {
              return x.getFullYear();
            }
            if (x.getFullYear() % 5 === 0) {
              return x.getFullYear().toString().slice(2);
            }
          }}
        />

        {/*
            Add the dependent axis for the first data set.
            Note that all components plotted against this axis will have the same y domain
          */}
        <VictoryAxis
          dependentAxis
          domain={[-10, 15]}
          offsetX={50}
          orientation="left"
          standalone={false}
          style={styles.axisOne}
        />

        {/* Red annotation line */}
        <VictoryLine
          data={[
            { x: new Date(1999, 1, 1), y: 0 },
            { x: new Date(2014, 6, 1), y: 0 },
          ]}
          domain={{
            x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
            y: [-10, 15],
          }}
          scale={{ x: 'time', y: 'linear' }}
          standalone={false}
          style={styles.lineThree}
        />

        {/* dataset one */}
        <VictoryLine
          data={dataSetOne}
          domain={{
            x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
            y: [-10, 15],
          }}
          interpolation="monotoneX"
          scale={{ x: 'time', y: 'linear' }}
          standalone={false}
          style={styles.lineOne}
        />

        {/*
            Add the dependent axis for the second data set.
            Note that all components plotted against this axis will have the same y domain
          */}
        <VictoryAxis
          dependentAxis
          domain={[0, 50]}
          orientation="right"
          standalone={false}
          style={styles.axisTwo}
        />

        {/* dataset two */}
        <VictoryLine
          data={dataSetTwo}
          domain={{
            x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
            y: [0, 50],
          }}
          interpolation="monotoneX"
          scale={{ x: 'time', y: 'linear' }}
          standalone={false}
          style={styles.lineTwo}
        />
      </g>
    </svg>
  );
};

export default Chart;
