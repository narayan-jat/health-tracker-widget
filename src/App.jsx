import { useState } from "react";
import "./App.css";
import Widget from "./components/widget";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SleepPlots from "./components/SleepPlots";
import RunningPlots from "./components/RunningPlots";
import ExercisePlots from "./components/ExcercisePlots";
import SittingPlots from "./components/SittingPlots";
import WaterPlots from "./components/WaterPlots";
import StepsPlots from "./components/StepsPlots";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Widget/>}></Route>
        <Route path="/sleepplots" element={<SleepPlots />}></Route>
        <Route path="/sittingplots" element={<SittingPlots />}></Route>
        <Route path="/exerciseplots" element={<ExercisePlots />}></Route>
        <Route path="/stepsplots" element={<StepsPlots />}></Route>
        <Route path="/runningplots" element={<RunningPlots />}></Route>
        <Route path="/waterplots" element={<WaterPlots />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
