import React, { useState } from "react";
import { EyeSlash, Eye } from "../../components/icons";
import HandPhone from "../../assets/handPhone.png";
import Button from "../../components/Button/Button";
import { dataNumber } from "./dataNumber";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function VerifyNumber() {
  const navigate = useNavigate();
  const [showEye, setShowEye] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleShowEye = () => {
    setShowEye(!showEye);
  };

  const validationSchema = yup.object().shape({
    number: yup
      .string()
      .min(6, "min six character")
      // .transform((value) => (value ? parseInt(value, 10) : undefined))
      // .test(
      //   "len",
      //   "Phone number must be at least 6 digits",
      //   (val) => val.toString().length >= 6
      // )
      .required("Phone number is required"),
  });

  const {
    values,
    handleSubmit,
    errors,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (val) => {
      // PARSE TO INTEGER
      console.log("SUBMIT", parseInt(val.number));
      navigate("/verifyPhone");
    },
  });

  const handleSetNumber = (idx) => {
    // Mengambil data dari dataNumber berdasarkan index
    if (idx !== 10 && idx !== 11) {
      const data = dataNumber.slice(0, 10);

      const selectedNumber = data[idx];

      // Menggabungkan nilai yang sudah ada dengan data yang dipilih
      const newNumber = values.number + selectedNumber;

      // Memperbarui nilai input formik
      setFieldValue("number", newNumber.toString());
    } else if (idx === 10 && values.number.length > 0) {
      setFieldValue("number", "");
    } else if (idx === 11 && values.number.length > 0) {
      const allNumber = { ...values };
      const deleteOneData = allNumber.number.toString().slice(0, -1);
      setFieldValue("number", deleteOneData);
    }
  };

  // CHANGE VALUE TO XX FROM DATA NUMBER
  const lengtNumber = values.number.length;
  const xValue = "X".repeat(lengtNumber);

  return (
    <div className="w-full relative h-screen">
      <div className="w-full bg-[#F0F0F2] h-[250px] flex flex-col py-5 px-3  ">
        <div className="flex justify-center  w-full gap-10">
          {showEye ? (
            <EyeSlash onClick={handleShowEye} />
          ) : (
            <Eye onClick={handleShowEye} />
          )}
          <p className="font-semibold">Continue with Phone</p>
        </div>

        <div className="flex justify-center items-center mt-[30px]">
          <img src={HandPhone} alt="mask" />
        </div>
      </div>
      <div className="w-full absolute rounded-[12px] mt-[-10px] z-10 bg-white">
        <div className="mt-[32px] w-full">
          <div className="w-full flex justify-center items-center">
            <p className="text-[#858597] text-[14px]">
              Enter Your Phone Number
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col px-3 pt-2">
          <div className="flex w-full ">
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col w-full"
            >
              <div className="flex w-full justify-center items-center">
                <input
                  id="number"
                  type="text"
                  value={showEye ? xValue : values.number}
                  // onChange={handleChangeInput}
                  onBlur={handleBlur}
                  className="border-[1px] w-full flex border-[#B8B8D2] outline-none rounded-md p-3"
                />

                <Button
                  type={"submit"}
                  width={"150px"}
                  backgroundColor={"#3D5CFF"}
                  color={"white"}
                >
                  Continue
                </Button>
              </div>

              {errors.number && touched.number && (
                <div className="text-red-500">{errors.number}</div>
              )}
            </form>
          </div>

          <div className="w-full ">
            <div className="w-full pt-8 md:pt-5  flex flex-wrap gap-y-4 md:gap-y-2 gap-x-6 md:gap-x-11 justify-center select-none">
              {dataNumber.map((item, index) => {
                return (
                  <div
                    key={index}
                    border={""}
                    width={"100px"}
                    onClick={() => handleSetNumber(index)}
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
    </div>
  );
}

export default VerifyNumber;
