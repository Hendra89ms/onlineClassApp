import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function SplashScreen() {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTouchStart = (e) => {
    // Simpan koordinat x dari titik awal
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // Simpan koordinat x dari titik terakhir
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {

    const distance = endX - startX;

    if (distance > 250 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (distance > 250 && distance > 0 && currentPage === 1) {
        setCurrentPage(1);
      }
    } else if (distance < 250 && currentPage <= 3) {
      setCurrentPage(currentPage + 1);

      if (distance < 250 && currentPage === 3) {
        setCurrentPage(3);
      }
    }

    // Reset state untuk swipe berikutnya
    setStartX(0);
    setEndX(0);
  };
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (endX > startX && currentPage >= 1) {
      // Jika pergerakan ke kanan, ubah visibilitas elemen
      setCurrentPage(currentPage - 1);
      if (endX > startX && currentPage === 1) {
        setCurrentPage(1);
      }
    } else if (endX < startX && currentPage <= 3) {
      // Jika pergerakan ke kiri, ubah visibilitas elemen
      setCurrentPage(currentPage + 1);
      if (endX < startX && currentPage === 3) {
        setCurrentPage(3);
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
    </div>
  );
}

export default SplashScreen;
