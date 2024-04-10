import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import SwipeElements from "../components/coba/Swap";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import VerifyNumber from "../pages/verifyNumber/VerifyNumber";
import VerifyPhone from "../pages/verifyPhone/VerifyPhone";
import Dashboard from "../pages/dashboard/Dashboard";

function RouterApp() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full md:w-[430px]">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<SplashScreen />} />
          <Route path="/coba" element={<SwipeElements />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verifyNumber" element={<VerifyNumber />} />
          <Route path="/verifyPhone" element={<VerifyPhone />} />
        </Routes>
      </div>
    </div>
  );
}

export default RouterApp;
