import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default class CaseLineChart extends React.PureComponent {
  render() {
    let data = this.props.data.map((data, idx) => {
      return {
        name: data.date,
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
        active: data.confirmed - data.recovered - data.deaths,
      };
    });

    if(this.props.average === true){
      for (var i = data.length - 1; i >= data.length - 7; i--) {
        data[i].confirmed = data[i].confirmed - data[i-1].confirmed;
        data[i].recovered = data[i].recovered - data[i-1].recovered
        data[i].deaths = data[i].deaths - data[i-1].deaths
        data[i].active = data[i].active - data[i-1].active
      }
      data = data.splice(data.length - 7, data.length - 7)
    }

    return (
      <LineChart width={250} height={200} data={data}>
        <YAxis hide={!this.props.average} tickLine={false} padding={{ bottom: 4}} domain={[0, 'auto']} />
        <XAxis hide={true} dataKey="name" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="confirmed"
          stroke="orange"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="recovered"
          stroke="green"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="active"
          stroke="silver"
          strokeWidth={!this.props.average ? 0 : 3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="deaths"
          stroke="maroon"
          strokeWidth={this.props.average ? 0 : 3}
          dot={false}
        />
        
      </LineChart>
    );
  }
}
