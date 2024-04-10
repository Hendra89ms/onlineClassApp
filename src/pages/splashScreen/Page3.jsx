import React from "react";
import Ilustration3 from "../../assets/illustration3.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Page3() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-center duration-300 transition-all h-screen">
      <div className="w-full">
        <div className="w-full flex justify-end pb-5 pr-8">
          <button className="border-none outline-none text-[#858597]">
            Skip
          </button>
        </div>

        <div className="w-full flex flex-col gap-5 justify-center items-center select-none ">
          <img
            src={Ilustration3}
            alt="ilustrasi"
            className="select-none w-[260px] h-[260px] "
          />
          <div className="w-full flex flex-col gap-3 justify-center items-center ">
            <div className="w-[200px] ">
              <h1 className="font-bold text-2xl">Create your own study plan</h1>
            </div>

            <p className="text-[#858597] w-[200px]">
              Study according to the study plan, make study more motivated
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-[9px] h-[5px] bg-[#EAEAFF] rounded-full"></div>
            <div className="w-[9px] h-[5px] bg-[#EAEAFF] rounded-full"></div>
            <div className="w-[28px] h-[5px] bg-[#3D5CFF] rounded-full"></div>
          </div>

          <div className="w-full flex justify-center items-center gap-3 mt-5">
            <Button
              className={"w-[200px] text-white"}
              backgroundColor={"#3D5CFF"}
              onClick={() => navigate("/register")}
            >
              <div>Sign up</div>
            </Button>
            <Button onClick={() => navigate("/login")}>
              <div>Log in</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
