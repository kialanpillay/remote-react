import React from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";

export default class CaseBarChart extends React.PureComponent {
  render() {
    const data = [
      {
        name: 'Percentage',
        active: (((this.props.data.confirmed - this.props.data.recovered - this.props.data.deaths) / this.props.data.confirmed) * 100).toFixed(2),
        recovered: ((this.props.data.recovered + this.props.data.deaths / this.props.data.confirmed) * 100).toFixed(2)
      },
    ];
    return (
      <BarChart width={180} height={220} data={data}>
        <Tooltip cursor={false}/>
        <XAxis hide={true} dataKey="name" />
        <Bar
          dataKey="recovered"
          fill="green"
          label={{
            fill: "white",
            fontSize: 16,
            position: "center",
            fontWeight: 400,
          }}
        />
        <Bar
          dataKey="active"
          fill="silver"
          label={{
            fill: "white",
            fontSize: 16,
            position: "center",
            fontWeight: 400,
          }}
        />
      </BarChart>
    );
  }
}
