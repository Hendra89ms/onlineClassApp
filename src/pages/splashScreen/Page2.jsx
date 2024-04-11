import React, { useEffect, useState } from "react";
import Ilustration2 from "../../assets/illustration2.png";
import { Link } from "react-router-dom";
import { ChevRonDoubleRight, ChevronDoubleLeft } from "../../components/icons";

function Page2() {
  const [showIconRight, setShowIconRight] = useState(true);
  const [showIconLeft, setShowIconLeft] = useState(true);

  useEffect(() => {
    // Mengatur timer untuk mengubah showDiv menjadi false setelah 3 detik
    const timer = setTimeout(() => {
      setShowIconRight(false);
    }, 5000);

    // Membersihkan timer saat komponen dilepas
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mengatur timer untuk mengubah showDiv menjadi false setelah 3 detik
    const timer = setTimeout(() => {
      setShowIconLeft(false);
    }, 5000);

    // Membersihkan timer saat komponen dilepas
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-screen duration-300 transition-all relative ">
      <div className="w-full">
        <div className="w-full flex justify-end pb-5 pr-8">
          <Link
            to={"/login"}
            className="border-none outline-none text-[#858597]"
          >
            Skip
          </Link>
        </div>

        <div className="w-full flex flex-col gap-5 justify-center items-center select-none ">
          <img
            src={Ilustration2}
            alt="ilustrasi"
            className="select-none w-[260px] h-[260px] "
          />
          <div className="w-full flex flex-col gap-3 justify-center items-center mt-3">
            <div className="w-[200px] ">
              <h1 className="font-bold text-2xl">Quick And easy learning</h1>
            </div>

            <p className="text-[#858597] w-[200px]">
              Easy and fast learning at any time to help you improve various
              skills
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-[9px] h-[5px] bg-[#EAEAFF] rounded-full"></div>
            <div className="w-[28px] h-[5px] bg-[#3D5CFF] rounded-full"></div>
            <div className="w-[9px] h-[5px] bg-[#EAEAFF] rounded-full"></div>
          </div>
        </div>
      </div>
      {showIconRight && (
        <div className="absolute right-0 top-[50%] animate-ping ">
          <ChevRonDoubleRight />
        </div>
      )}

      {showIconLeft && (
        <div className="absolute left-0 top-[50%] animate-ping ">
          <ChevronDoubleLeft />
        </div>
      )}
    </div>
  );
}

export default Page2;
