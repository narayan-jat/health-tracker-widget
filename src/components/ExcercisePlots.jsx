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

export default function ExercisePlots() {
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
      generateWeeklyData("exercise", 2000, 3000);
    }
    if (Monthly.length == 0) {
      generateMonthlyData("exercise", 2000, 3000);
    }
    if (Yearly.length == 0) {
        generateYearlyData("exercise", 2000 * 30, 3000 * 30);
      }
  }, []);

  console.log(Weekly);
  const graphs = [
    <BarGraph
      data={Weekly}
      average={averageWeekly}
      max={maxWeekly}
      type={"Calorie burnt"}
      dataKey={"exercise"}
    />,
    <LineGraph data={Monthly}  average={averageMonthly} max={maxMonthly} type={"Calorie burnt"} dataKey={"exercise"}/>,
    <LineGraph
      data={Yearly}
      average={averageYearly}
      max={maxYearly}
      type={"Calorie burnt"}
      dataKey={"exercise"}
    />,
  ];
  return (
    <GraphWidget components={graphs} title={"Calorie Burnt for this"} />
  );
}
