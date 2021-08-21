import { BALANCE_LINE_COLOR, LINE_TWO_COLOR } from '@govhack/constants';
import React from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

type Props = {
  value: number;
};

type State = {
  percent: number;
  data: { x: number; y: number }[];
};

class MonitorChart extends React.Component<Props, State> {
  setStateInterval: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      percent: 0,
      data: this.getData(0),
    };
  }

  componentDidMount() {
    let percent = 0;
    let self = this;
    this.setStateInterval = window.setTimeout(() => {
      percent = self.props.value;
      this.setState({
        percent,
        data: this.getData(percent),
      });
    }, 500);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent: number) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) => {
                  const color =
                    datum.y > 30 ? BALANCE_LINE_COLOR : LINE_TWO_COLOR;
                  return datum.x === 1 ? color : 'transparent';
                },
              },
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {newProps => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={200}
                  text={`${Number(newProps.percent).toFixed(2)} kWh`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default MonitorChart;
