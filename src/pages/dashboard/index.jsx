import CardHome from "./cardHome";
import ProfileAccount from "./profile";


function Dashboard() {

  return (
    <div className="w-full h-screen duration-300 transition-all">
      <div className="bg-[#3D5CFF] text-white flex justify-between h-[180px] px-4 pt-6 relative w-full">
        <div>
          <h1 className="font-bold text-[24px]">Hi, Kristin</h1>
          <p className="text-[14px]">Let's start learning</p>
        </div>

        <ProfileAccount />


        <div className="absolute -bottom-[50px]  left-1/2 transform -translate-x-1/2 mt-[20px] bg-white w-[350px] h-[100px] shadow-md rounded-md flex flex-col justify-center items-center">
          <div className="flex justify-between w-full px-3 pt-3">
            <div>
              <h1 className="text-[#858597] text-[12px]">Learned today</h1>
              <h1 className="font-bold text-[20px] text-black">
                46min <span className="text-[#858597] text-[10px]">/60min</span>{" "}
              </h1>
            </div>
            <div className="text-[#3D5CFF] text-[12px]">My courses</div>
          </div>
          <div className="h-[6px] w-full rounded-full px-3 mt-1 flex">
            <div className="h-full w-[70%] bg-gradient-to-r from-[#F4F3FD] to-red-500 rounded-l-full"></div>
            <div className="h-full w-[30%] rounded-r-full bg-[#F4F3FD]"></div>
          </div>
        </div>
      </div>

      {/* CARD HOME */}
      <div className="flex gap-3 mt-16 px-4 " >
        <CardHome />
        <CardHome />
      </div>

      <div className="mt-5" >
        <p className="font-semibold" >Learning Plan</p>

        <div className="shadow-md rounded-md w-full  mt-3 h-[100px] border-[1px]" >
          <div className="flex justify-between" >
            <p>Packaging Design</p>
            <p>40/48</p>
          </div>

          <div className="flex justify-between" >
            <p>Product Design</p>
            <p>6/24</p>
          </div>
        </div>

        <div className="bg-[#EFE0FF] w-full h-[100px] rounded-t-md" >

        </div>
      </div>
    </div>

  );
}

export default Dashboard;
