import React, { useState } from "react";
import { dataNumber } from "../verifyNumber/dataNumber";
import Button from "../../components/Button/Button";
import { Closed } from "../../components/icons";
import { useNavigate } from "react-router-dom";
import ModalPage from "../../components/modal/ModalPage";

function VerifyPhone() {
  const [selectNumber, setSelectNumber] = useState({
    numberOne: "",
    numberTwo: "",
    numberThree: "",
    numberFor: "",
    error: false,
  });
  const navigate = useNavigate();
  const [submitSuccess, setShowSubmitSuccess] = useState(false);

  const handleSetNumber = (item, index) => {
    // Mengambil data dari dataNumber berdasarkan index
    if (index !== 10 && index !== 11) {
      if (!selectNumber.numberOne) {
        setSelectNumber({ ...selectNumber, numberOne: item, error: false });
      } else if (!selectNumber.numberTwo) {
        setSelectNumber({ ...selectNumber, numberTwo: item, error: false });
      } else if (!selectNumber.numberThree) {
        setSelectNumber({ ...selectNumber, numberThree: item, error: false });
      } else if (!selectNumber.numberFor) {
        setSelectNumber({ ...selectNumber, numberFor: item, error: false });
      }
    }
    if (index === 10) {
      setSelectNumber({
        numberOne: "",
        numberTwo: "",
        numberThree: "",
        numberFor: "",
        error: false,
      });
    }

    if (index === 11 && selectNumber.numberFor) {
      setSelectNumber({ ...selectNumber, numberFor: "" });
    } else if (index === 11 && selectNumber.numberThree) {
      setSelectNumber({ ...selectNumber, numberThree: "" });
    } else if (index === 11 && selectNumber.numberTwo) {
      setSelectNumber({ ...selectNumber, numberTwo: "" });
    } else if (index === 11 && selectNumber.numberOne) {
      setSelectNumber({ ...selectNumber, numberOne: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      selectNumber.numberOne.length === 0 ||
      selectNumber.numberTwo.length === 0 ||
      selectNumber.numberThree.length === 0 ||
      selectNumber.numberFor.length === 0
    ) {
      return setSelectNumber({
        ...selectNumber,
        error: true,
      });
    }

    const allData = `${
      selectNumber.numberOne +
      selectNumber.numberTwo +
      selectNumber.numberThree +
      selectNumber.numberFor
    }`;

    if (allData) {
      setShowSubmitSuccess(true);
      console.log("DATA: ", allData);
    }
  };

  return (
    <div className="w-full relative h-screen pt-10 ">
      <div className="flex items-center w-[260px] justify-between pl-3">
        <Closed
          className={"w-[14px] h-[14px] cursor-pointer"}
          onClick={() => navigate("/verifyNumber")}
        />
        <p className="font-semibold">Verify Phone</p>
      </div>

      <div className="w-full ">
        <div className="mt-[32px] w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[#858597] text-[14px]">
              Code is sent to 283 835 2999
            </p>

            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col w-full pt-3"
            >
              <div className="flex flex-col gap-3 w-full justify-center items-center">
                <div className="w-full flex gap-3 justify-center items-center">
                  <div
                    className={`border-[1px] w-[50px] h-[50px] flex ${
                      selectNumber.error && selectNumber.numberOne.length === 0
                        ? "border-red-500"
                        : "border-[#B8B8D2]"
                    } outline-none rounded-md p-3 justify-center items-center font-semibold`}
                  >
                    {selectNumber.numberOne}
                  </div>
                  <div
                    className={`border-[1px] w-[50px] h-[50px] flex ${
                      selectNumber.error && selectNumber.numberTwo.length === 0
                        ? "border-red-500"
                        : "border-[#B8B8D2]"
                    } outline-none rounded-md p-3 justify-center items-center font-semibold`}
                  >
                    {selectNumber.numberTwo}
                  </div>
                  <div
                    className={`border-[1px] w-[50px] h-[50px] flex ${
                      selectNumber.error &&
                      selectNumber.numberThree.length === 0
                        ? "border-red-500"
                        : "border-[#B8B8D2]"
                    } outline-none rounded-md p-3 justify-center items-center font-semibold`}
                  >
                    {selectNumber.numberThree}
                  </div>
                  <div
                    className={`border-[1px] w-[50px] h-[50px] flex ${
                      selectNumber.error && selectNumber.numberFor.length === 0
                        ? "border-red-500"
                        : "border-[#B8B8D2]"
                    } outline-none rounded-md p-3 justify-center items-center font-semibold`}
                  >
                    {selectNumber.numberFor}
                  </div>
                </div>

                <div className="w-full pt-10 flex justify-center items-center">
                  <Button
                    type={"submit"}
                    width={"300px"}
                    backgroundColor={"#3D5CFF"}
                    color={"white"}
                  >
                    Verify and Create Account
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full flex flex-col px-3 pt-2">
          <div className="w-full ">
            <div className="w-full pt-8 md:pt-5  flex flex-wrap gap-y-4 md:gap-y-2 gap-x-6 md:gap-x-11 justify-center select-none">
              {dataNumber.map((item, index) => {
                return (
                  <div
                    key={index}
                    border={""}
                    width={"100px"}
                    onClick={() => handleSetNumber(item.toString(), index)}
                    className={
                      "text-xl font-bold flex justify-center items-center h-[50px] w-[100px] md:[120px] cursor-pointer"
                    }
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {submitSuccess && <ModalPage />}
    </div>
  );
}

export default VerifyPhone;
