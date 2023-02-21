import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
