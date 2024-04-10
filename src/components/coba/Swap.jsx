import React, { useState } from "react";

function SwipeElements() {
  const [showRed, setShowRed] = useState(true);
  const [showBlue, setShowBlue] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (endX > startX) {
      // Jika pergerakan ke kanan, ubah visibilitas elemen
      if (showGreen) {
        setShowRed(false);
        setShowBlue(true);
        setShowGreen(false);
      } else {
        setShowRed(true);
        setShowBlue(false);
        setShowGreen(false);
      }
    } else if (endX < startX) {
      // Jika pergerakan ke kiri, ubah visibilitas elemen

      if(showGreen){
        return;
      }
      setShowRed(false);
      setShowBlue(true);
      setShowGreen(false);
    }
    if (endX < startX && showBlue === true) {
      setShowBlue(false);
      setShowRed(false);
      setShowGreen(true);
    } else if (endX > startX && showBlue) {
      setShowGreen(false);
      setShowBlue(false);
      setShowRed(true);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-full"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {showRed && <div className="bg-red-500 w-[500px] h-screen"></div>}
      {showBlue && <div className="bg-blue-500 w-[500px] h-screen"></div>}
      {showGreen && <div className="bg-green-500 w-[500px] h-screen"></div>}
    </div>
  );
}

export default SwipeElements;
