import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Eye, EyeSlash, Facebook, Google } from "../../components/icons";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate();

  const handleClickEye = () => {
    setShowEye(!showEye);
  };

  return (
    <div className="w-full h-screen relative">
      <div className="w-full bg-[#F0F0F2] h-[160px] flex flex-col justify-end px-6 py-5 rounded-t-[10px] rounded-md">
        <h1 className="text-2xl font-bold pb-3">Log In</h1>
      </div>

      <form
        action="post"
        className="w-full rounded-xl px-6 pt-5 bg-white absolute mt-[-10px] z-10 "
      >
        <div className="w-full flex flex-col gap-3 mt-[32px]">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-[#858597]">
              Your Email
            </label>
            <input
              type="email"
              className="border-[1px] border-[#B8B8D2] outline-none rounded-md p-3"
            />
          </div>

          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-[#858597]">
              Password
            </label>
            <div className="w-full relative">
              <input
                type={`${showEye ? "text" : "password"}`}
                className="w-full border-[1px] border-[#B8B8D2] outline-none rounded-md p-3"
              />
              <div className="absolute right-[15px] top-[15px] cursor-pointer">
                {showEye ? (
                  <Eye onClick={handleClickEye} />
                ) : (
                  <EyeSlash onClick={handleClickEye} />
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end ">
            <p className="text-[#858597] text-[13px] cursor-pointer">
              Forget Password
            </p>
          </div>
          <Button
            onClick={() => navigate("/verifyNumber")}
            width={"100%"}
            backgroundColor={"#3D5CFF"}
            color={"white"}
          >
            Log In
          </Button>

          <div className="flex flex-col gap-5 text-[14px] md:gap-3 w-full justify-center items-center pt-[8px]">
            <p>
              Don't have an account?{" "}
              <span className="text-[#3D5CFF] font-semibold">
                <Link to={"/register"}>Sign up</Link>
              </span>
            </p>

            <div className="w-full flex items-center gap-3 text-[#B8B8D2]">
              <div className="w-full border-[1px] border-[#B8B8D2]"></div>
              <p className="w-[400px] text-center text-[13px] ">
                Or Login with
              </p>
              <div className="w-full border-[1px] border-[#B8B8D2]"></div>
            </div>

            <div className="flex gap-8 items-center">
              <Google className={"cursor-pointer"} />
              <Facebook className={"cursor-pointer"} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
