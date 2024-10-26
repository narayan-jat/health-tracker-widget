import React from "react";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import {useEffect } from "react";
import {
  useRandomDataWeekly,
  useRandomDataMonthly,
  useRandomDataYearly
} from "./RandomDataGenerator";
import GraphWidget from "./GraphWidget";

export default function StepsPlots() {
  const {
    data: Weekly,
    average: averageWeekly,
    max: maxWeekly,
    generateWeeklyData,
  } = useRandomDataWeekly();

  const {
    data: Monthly,
    average: averageMonthly,
    max: maxMonthly,
    generateMonthlyData,
  } = useRandomDataMonthly();

  const {
    data: Yearly,
    average: averageYearly,
    max: maxYearly,
    generateYearlyData,
  } = useRandomDataYearly();

  useEffect(() => {
    if (Weekly.length == 0) {
      generateWeeklyData("steps", 4000, 8000);
    }
    if (Monthly.length == 0) {
      generateMonthlyData("steps", 4000, 8000);
    }
    if (Yearly.length == 0) {
        generateYearlyData("steps", 4000 * 30, 8000 * 30);
      }
  }, []);

  console.log(Weekly);
  const graphs = [
    <BarGraph
      data={Weekly}
      average={averageWeekly}
      max={maxWeekly}
      type={"Steps taken"}
      dataKey={"steps"}
    />,
    <LineGraph data={Monthly}  average={averageMonthly} max={maxMonthly} type={"Steps taken"} dataKey={"steps"}/>,
    <LineGraph
      data={Yearly}
      average={averageYearly}
      max={maxYearly}
      type={"Steps taken"}
      dataKey={"steps"}
    />,
  ];
  return (
    <GraphWidget components={graphs} title={"Step Count for this"} />
  );
}
