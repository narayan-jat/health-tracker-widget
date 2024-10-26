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

export default function WaterPlots() {
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
      generateWeeklyData("water", 3, 7);
    }
    if (Monthly.length == 0) {
      generateMonthlyData("water", 3, 7);
    }
    if (Yearly.length == 0) {
        generateYearlyData("water", 3 * 30, 7 * 30);
      }
  }, []);

  console.log(Weekly);
  const graphs = [
    <BarGraph
      data={Weekly}
      average={averageWeekly}
      max={maxWeekly}
      type={"Water taken in ltrs"}
      dataKey={"water"}
    />,
    <LineGraph data={Monthly}  average={averageMonthly} max={maxMonthly} type={"Water taken in ltrs"} dataKey={"water"}/>,
    <LineGraph
      data={Yearly}
      average={averageYearly}
      max={maxYearly}
      type={"Water in ltrs"}
      dataKey={"water"}
    />,
  ];
  return (
    <GraphWidget components={graphs} title={"Water Drinking graph for this"} />
  );
}
