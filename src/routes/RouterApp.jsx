import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import Coba1 from "../components/coba/Coba1";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import VerifyNumber from "../pages/verifyNumber/VerifyNumber";
import VerifyPhone from "../pages/verifyPhone/VerifyPhone";
import Layout from "../layout/Layout";

import {
  Account,
  Course,
  Dashboard,
  Message,
} from "../pages/dashboard/indexPage";

function RouterApp() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full md:w-[430px]">
        <Routes>
          <Route element={<Layout />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="course" element={<Course />} />
            <Route path="mesasge" element={<Message />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="/" element={<SplashScreen />} />
          <Route path="/coba" element={<Coba1 />} />
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
