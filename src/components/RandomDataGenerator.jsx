import React from "react";
import { useState } from "react";

export const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function useRandomDataWeekly() {
  // Initial state for data, averageSteps, and maxSteps
  const [data, setData] = useState([]);
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);

  const generateWeeklyData = (dataKey, min, max) => {
    const cur_date = new Date();
    const newData = []
    for (let i = 0; i < 7; i++) {
      const dayData = {
        date: `${cur_date.getMonth()}/${cur_date.getDate() - i}`,
        [dataKey]: generateRandom(min, max),
      };
      newData.push(dayData)
    }
    const maximum = Math.max(...newData.map((entry) => entry[dataKey]));
    const total = newData.reduce((total, entry) => total + entry[dataKey], 0);
    const average = Math.floor(total / newData.length);
    setAverage(average);
    setMax(maximum);
    setData(newData)
  };

  // Return the data, averageSteps, and maxSteps
  return {
    data,
    generateWeeklyData,
    average,
    max,
  };
}

export function useRandomDataMonthly() {
  // Initial state for data, averageSteps, and maxSteps
  const [data, setData] = useState([]);
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);

  const generateMonthlyData = (dataKey, min, max) => {
    const cur_date = new Date();
    const newData = []
    for (let i = 1; i < 31; i++) {
      const dayData = {
        date: `${cur_date.getMonth() - 1}/${i}`,
        [dataKey]: generateRandom(min, max),
      };
      newData.push(dayData)
    }
    const maximum = Math.max(...newData.map((entry) => entry[dataKey]));
    const total = newData.reduce((total, entry) => total + entry[dataKey], 0);
    const average = Math.floor(total / newData.length);
    setAverage(average);
    setMax(maximum);
    setData(newData)
  };

  // Return the data, averageSteps, and maxSteps
  return {
    data,
    generateMonthlyData,
    average,
    max,
  };
}

export function useRandomDataYearly() {
  // Initial state for data, averageSteps, and maxSteps
  const [data, setData] = useState([]);
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);

  const generateYearlyData = (dataKey, min, max) => {
    const cur_date = new Date();
    const newData = []
    for (let i = 1; i < 13; i++) {
      const dayData = {
        date: `${i}`,
        [dataKey]: generateRandom(min, max),
      };
      newData.push(dayData)
    }
    const maximum = Math.max(...newData.map((entry) => entry[dataKey]));
    const total = newData.reduce((total, entry) => total + entry[dataKey], 0);
    const average = Math.floor(total / newData.length);
    setAverage(average);
    setMax(maximum);
    setData(newData)
  };

  // Return the data, averageSteps, and maxSteps
  return {
    data,
    generateYearlyData,
    average,
    max,
  };
}