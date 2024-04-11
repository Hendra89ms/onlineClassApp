import { useEffect, useState } from "react";
import Ilustration1 from "../../assets/ilustration1.png";
import { Link } from "react-router-dom";
import { ChevRonDoubleRight } from "../../components/icons";

function Page1() {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    // Mengatur timer untuk mengubah showDiv menjadi false setelah 3 detik
    const timer = setTimeout(() => {
      setShowIcon(false);
    }, 5000); // 3000 milidetik = 3 detik

    // Membersihkan timer saat komponen dilepas
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-screen duration-300 transition-all relative">
      <div className="w-full">
        <div className="w-full flex justify-end pb-5 pr-8 ">
          <Link
            to={"/login"}
            className="border-none outline-none text-[#858597]"
          >
            Skip
          </Link>
        </div>

        <div className="w-full flex flex-col gap-5 justify-center items-center select-none ">
          <img
            src={Ilustration1}
            alt="ilustrasi"
            className="w-[260px] h-[260px] "
          />
          <div className="w-full flex flex-col gap-3 justify-center items-center mt-3">
            <div className="w-[200px] ">
              <h1 className="font-bold text-2xl">
                Numerous free trial courses
              </h1>
            </div>

            <p className="text-[#858597] w-[200px]">
              Free courses for you to find your way to learning
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-[28px] h-[5px] bg-[#3D5CFF] rounded-full"></div>
            <div className="w-[9px] h-[5px] bg-[#EAEAFF] rounded-full"></div>
            <div className="w-[9px] h-[5px] bg-[#EAEAFF] rounded-full"></div>
          </div>
        </div>
      </div>
      {showIcon && (
        <div className="absolute right-0 top-[50%] animate-ping ">
          <ChevRonDoubleRight />
        </div>
      )}
    </div>
  );
}

export default Page1;
