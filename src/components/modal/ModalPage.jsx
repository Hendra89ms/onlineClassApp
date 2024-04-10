import React from "react";
import Button from "../Button/Button";
import { Vector } from "../icons";
import { useNavigate } from "react-router-dom";

function ModalPage() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 z-50 bg-[#858597] flex justify-center items-center">
      <div className="bg-white w-[300px] h-[300px] rounded-md flex flex-col justify-center items-center gap-3">
        <div className="rounded-full w-[64px] h-[64px] bg-[#3D5CFF] flex justify-center items-center">
          <Vector />
        </div>
        <h1>Success</h1>
        <p className="text-[#858597] text-[12px] text-center w-[200px] ">
          Congratulations, you have completed your registration!
        </p>
        <Button
          width={"250px"}
          backgroundColor={"#3D5CFF"}
          className={"text-white"}
          onClick={() => navigate("/dashboard")}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default ModalPage;
