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
        <Route path="/health-tracker-widget" element={<Widget/>}></Route>
        <Route path="/health-tracker-widget/sleepplots" element={<SleepPlots />}></Route>
        <Route path="/health-tracker-widget/sittingplots" element={<SittingPlots />}></Route>
        <Route path="/health-tracker-widget/exerciseplots" element={<ExercisePlots />}></Route>
        <Route path="/health-tracker-widget/stepsplots" element={<StepsPlots />}></Route>
        <Route path="/health-tracker-widget/runningplots" element={<RunningPlots />}></Route>
        <Route path="/health-tracker-widget/waterplots" element={<WaterPlots />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
