import React, { useEffect, useState } from "react";
import "./GraphWidget.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function GraphWidget({components, title}) {
  // State to keep track of the current graph index
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [frequency, setFrequecy] = useState("Week")
  // Handler for moving to the previous graph
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    handleFrequency()
  }, [currentIndex])
  const handleFrequency = () => {
    if (currentIndex == 0){
      setFrequecy("Week")
    } else if (currentIndex == 1){
      setFrequecy("Month")
    }else{
      setFrequecy("Year")
    }
}
  // Handler for moving to the next graph
  const handleNext =  () => {
     setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleChange = () => {
    navigate("/")
  }
  return (
    <div className="app-container">
      <div className="outer-card">
        <div className="card-header">
          <div className="center-item">
            <h3>{title} {frequency}</h3>
          </div>
          <div className="edit-icon right-item" onClick={handleChange} style={{ fontSize: "24px" }}>
            <FaArrowLeft />
          </div>
        </div>

        <div className="carousel-container">
          <button className="prev-btn" onClick={handlePrev}>
            <FaArrowLeft />
          </button>


          {/* Display the currently selected graph */}
          <div className="graph-content">{components[currentIndex]}</div>


          <button className="next-btn" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GraphWidget;
