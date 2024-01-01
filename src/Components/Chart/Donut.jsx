import React, { memo } from "react";

const Donut = memo(
  ({ values = [], width, height, bgColor, defaultLineWidth = 3.5 }) => {
    const r = 15.91549430918954;
    const circumference = 2 * Math.PI * r;

    const sum = values.reduce((a, b) => a + b.value, 0);
    if (sum < 100 && bgColor) {
      values.push({
        value: 100 - sum,
        color: bgColor,
        lineWidth: defaultLineWidth,
      });
    }

    const aggregated = values.reduce(
      (output, item) => {
        const { value, color, lineWidth } = item;
        const length = (circumference / 100) * value;
        const fillLength = (circumference / 100) * (100 - value);
        const dashArray = [length, fillLength];
        const rotation = 25 - output.total;
        output.total += value;
        output.items.push([dashArray.join(" "), rotation, color, lineWidth]);
        return output;
      },
      {
        total: 0,
        items: [],
      }
    );
    return (
      <svg width={width} height={height} viewBox="0 0 40 40">
        {aggregated.items.map(([dashArray, rotation, color, lineWidth], i) => (
          <circle
            key={`circle_${i}`}
            cx="20"
            cy="20"
            r={r}
            fill="transparent"
            stroke={color}
            strokeWidth={lineWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={rotation}
          />
        ))}
        <text x="50%" y="50%" textAnchor="middle" style={{ fontSize: "0.5rem", fill: "#000" }}>
  65%
  <tspan x="50%" y="60%" style={{ fontSize: " 2px", fill: "#6B7280" }} dominantBaseline="auto">
    Total new
  </tspan>
  <tspan x="50%" y="65%" style={{ fontSize: " 2px", fill: "#6B7280" }} dominantBaseline="auto">
  Customers
</tspan>
</text>

      </svg>
    );
  }
);

export default Donut;
