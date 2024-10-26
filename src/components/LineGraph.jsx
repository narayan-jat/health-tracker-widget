import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";

const aggregateByMonth = (data) => {
    const monthlyData = [];
    const months = Array(12)
      .fill(0)
      .map((_, i) => ({ total: 0, count: 0 }));
  
    data.forEach(({ date, hours }) => {
      const month = new Date(date).getMonth();
      months[month].total += hours;
      months[month].count += 1;
    });
  
    months.forEach((month, index) => {
      if (month.count > 0) {
        monthlyData.push({
          month: new Date(0, index).toLocaleString("default", { month: "short" }),
          averageHours: month.total / month.count,
        });
      }
    });
  
    return monthlyData;

}

function LineGraph({ title, data, dataKey, average, type, max }) {
    // const monthlyData = aggregateByMonth(data);
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
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" label={{ value: data.length == 12 ? "Month" : "Date", position: "insideBottom", offset: -5 }} />
          {/* Label for Y-Axis */}
          <YAxis label={{ value: type, angle: -90, position: "insideLeft", dy: 10 }} />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#ffa07a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "2px",
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

export default LineGraph;
