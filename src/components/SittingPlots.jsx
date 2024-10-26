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

export default function SittingPlots() {
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
      generateWeeklyData("sitting", 5, 12);
    }
    if (Monthly.length == 0) {
      generateMonthlyData("sitting", 5, 12);
    }
    if (Yearly.length == 0) {
      generateYearlyData("sitting", 5 * 30, 12 * 30);
    }
  }, []);

  console.log(Weekly);
  const graphs = [
    <BarGraph
      data={Weekly}
      average={averageWeekly}
      max={maxWeekly}
      type={"Sitting hours"}
      fill={"#D3E0EA"}
      dataKey={"sitting"}
    />,
    <LineGraph
      data={Monthly}
      average={averageMonthly}
      max={maxMonthly}
      type={"Sitting hours"}
      dataKey={"sitting"}
      fill={"#D3E0EA"}
    />,
    <LineGraph
      data={Yearly}
      average={averageYearly}
      max={maxYearly}
      type={"Sitting hours"}
      fill={"#D3E0EA"}
      dataKey={"sitting"}
    />,
  ];
  return <GraphWidget components={graphs} title={"Sitting Plot for this"} />;
}
