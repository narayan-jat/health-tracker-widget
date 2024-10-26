import React from "react";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import { useEffect } from "react";
import {
  useRandomDataWeekly,
  useRandomDataMonthly,
  useRandomDataYearly,
} from "./RandomDataGenerator";
import GraphWidget from "./GraphWidget";

export default function SleepPlots() {
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
      generateWeeklyData("hours", 5, 10);
    }
    if (Monthly.length == 0) {
      generateMonthlyData("hours", 5, 10);
    }
    if (Yearly.length == 0) {
      generateYearlyData("hours", 155, 300);
    }
  }, []);

  console.log(Weekly);
  const graphs = [
    <BarGraph
      data={Weekly}
      average={averageWeekly}
      max={maxWeekly}
      type={"Sleep Hours"}
      dataKey={"hours"}
      fill={"#597984"}
    />,
    <LineGraph
      data={Monthly}
      average={averageMonthly}
      max={maxMonthly}
      type={"Sleep Hours"}
      dataKey={"hours"}
      fill={"#597984"}
    />,
    <LineGraph
      data={Yearly}
      average={averageYearly}
      max={maxYearly}
      type={"Sleep Hours"}
      dataKey={"hours"}
      fill={"#597984"}
    />,
  ];
  return <GraphWidget components={graphs} title={"Sleep graph for this"} />;
}
