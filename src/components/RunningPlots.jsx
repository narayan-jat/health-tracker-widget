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

export default function RunningPlots() {
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
      generateWeeklyData("running", 1, 5);
    }
    if (Monthly.length == 0) {
      generateMonthlyData("running", 1, 5);
    }
    if (Yearly.length == 0) {
      generateYearlyData("running", 30, 150);
    }
  }, []);

  console.log(Weekly);
  const graphs = [
    <BarGraph
      data={Weekly}
      average={averageWeekly}
      max={maxWeekly}
      type={"Running in kms"}
      dataKey={"running"}
      fill={"#FFC074"}
    />,
    <LineGraph
      data={Monthly}
      average={averageMonthly}
      max={maxMonthly}
      type={"Running in kms"}
      dataKey={"running"}
      fill={"#FFC074"}
    />,
    <LineGraph
      data={Yearly}
      average={averageYearly}
      max={maxYearly}
      type={"Running in kms"}
      dataKey={"running"}
      fill={"#FFC074"}
    />,
  ];
  return <GraphWidget components={graphs} title={"Running for this"} />;
}
