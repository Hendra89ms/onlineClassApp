import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { dataNavLayout } from "./dataNav";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setActiveIndex(0);
    navigate("/dashboard");
  }, []);

  const handlePath = (idx) => {
    setActiveIndex(idx);
    if (idx === 0) {
      return navigate("/dashboard");
    } else if (idx === 1) {
      return navigate("/course");
    } else if (idx === 3) {
      return navigate("/mesasge");
    } else if (idx === 4) {
      return navigate("/account");
    }
  };

  const handleTopBlue = (index) => {
    if (location.pathname === "/dashboard" && index === 0) {
      return "border-[2px] border-blue-500 w-full duration-300 transition-all";
    } else if (location.pathname === "/course" && index === 1) {
      return "border-[2px] border-blue-500 w-full duration-300 transition-all";
    } else if (location.pathname === "/mesasge" && index === 3) {
      return "border-[2px] border-blue-500 w-full duration-300 transition-all";
    } else if (location.pathname === "/account" && index === 4) {
      return "border-[2px] border-blue-500 w-full duration-300 transition-all";
    }
  };

  return (
    <div className="w-screen md:w-full h-screen relative overflow-hidden ">
      <div className="">
        <Outlet />
      </div>

      <div className="w-full flex gap-3 absolute bottom-0 mb-3 justify-center items-center select-none">
        <div className="flex w-full justify-center h-[70px] gap-3">
          {dataNavLayout.map((item, index) => {
            const isActive = activeIndex === index;
            const iconColor = isActive ? "#3D5CFF" : "#F4F3FD";

            return (
              <div
                onClick={() => {
                  if (index === 2) return;
                  handlePath(index);
                }}
                key={index}
                className={`w-full  px-3 h-full flex flex-col justify-between items-center cursor-pointer ${
                  item.title === "Search" && "-mt-4 bg-white h-[90px] "
                } `}
              >
                <div className={`${handleTopBlue(index)}`}></div>
                <div
                  className={`${
                    item.title === "Search" &&
                    "bg-[#F5F7FF] h-[52px] w-[52px] flex justify-center items-center rounded-full"
                  }`}
                >
                  {React.cloneElement(item.icon, { color: iconColor })}
                </div>
                <h1 className="text-[11px] text-[#B8B8D2]">{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Layout;
