import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "../../components/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterPage() {
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate()

  const handleClickEye = () => {
    setShowEye(!showEye);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Field Email is Required"),
    password: Yup.string().required("Field Password is Required"),
  });

  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (val) => {
        console.log("VALUE : ", val);
        alert("Register is Successfull!");
        navigate("/login")
      },
    });

  return (
    <div className="w-full h-screen relative">
      <div className="w-full bg-[#F0F0F2] h-[160px] flex flex-col justify-end px-6 py-5 rounded-t-[10px] rounded-md">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-[#858597] text-[13px]">
          Enter your details below & free sign up
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        action="post"
        className="w-full rounded-xl px-6 pt-5 bg-white absolute mt-[-10px] z-10 "
      >
        <div className="w-full flex flex-col gap-3 mt-[32px]">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-[#858597]">
              Your Email
            </label>
            <div className="w-full">
              <input
                type="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="border-[1px] border-[#B8B8D2] outline-none rounded-md p-3 w-full"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-[13px]">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-[#858597]">
              Password
            </label>
            <div className="w-full relative">
              <div className="w-full">
                <input
                  type={`${showEye ? "text" : "password"}`}
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full border-[1px] border-[#B8B8D2] outline-none rounded-md p-3"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-[13px]">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="absolute right-[15px] top-[15px] cursor-pointer">
                {showEye ? (
                  <Eye onClick={handleClickEye} />
                ) : (
                  <EyeSlash onClick={handleClickEye} />
                )}
              </div>
            </div>
          </div>
          <Button
            width={"100%"}
            className={"mt-[24px]"}
            backgroundColor={"#3D5CFF"}
            color={"white"}
            type={"submit"}
          >
            Create account
          </Button>

          <div className="flex gap-3 w-full justify-center items-center pt-[17px]">
            <input type="checkbox" className="h-[20px] w-[20px]" />
            <p className="text-[#858597] text-[13px]">
              By creating an account you have to agree with our them & condition
            </p>
          </div>

          <p className="text-center pt-[17px] text-[14px]">
            Already have an account ?{" "}
            <span className="text-[#3D5CFF] font font-semibold">
              <Link to={"/login"}>Log in</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
