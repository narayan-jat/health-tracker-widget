import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BarGraph({ title, data, dataKey, average, type, max, fill }) {
  console.log(data);
  return (
    <div
      style={{
        backgroundColor: "#ffd1dc",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: data.length == 12 ? "Month" : "Date", position: "insideBottom", offset: -5 }} />
          {/* Label for Y-Axis */}
          <YAxis label={{ value: type, angle: -90, position: "insideLeft", dy: -5 }} />
          <Tooltip />
          <Bar dataKey={dataKey} fill={fill} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "5px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h4>{average}</h4>
          <p>Average {type}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h4>{max}</h4>
          <p>Maximum {type}</p>
        </div>
      </div>
    </div>
  );
}

export default BarGraph;
