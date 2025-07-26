import { useState } from 'react'
import TabOne from './tab1';

function NavChoiceCourse() {

    const [activeTab, setActiveTab] = useState(1);


    return (
        <div>
            <div className='flex gap-3 mt-3 ' >
                <button onClick={() => {
                    setActiveTab(1);
                }} className={`${activeTab === 1 && "bg-[#3D5CFF] text-white"} border-none outline-none w-[73px] h-[20px] rounded-xl flex justify-center items-center text-[12px]`} >All</button>

                <button onClick={() => {
                    setActiveTab(2);
                }} className={`${activeTab === 2 && "bg-[#3D5CFF] text-white "} border-none outline-none w-[73px] h-[20px] rounded-xl flex justify-center items-center text-[12px]`} >Populer</button>

                <button onClick={() => {
                    setActiveTab(3);
                }} className={`${activeTab === 3 && "bg-[#3D5CFF] text-white"} border-none outline-none w-[73px] h-[20px] rounded-xl flex justify-center items-center text-[12px]`} >New</button>


            </div>

            <div className='mt-3 h-[280px] overflow-auto' >
                {
                    activeTab === 1 && (
                        <TabOne />
                    )
                }

                {
                    activeTab === 2 && (
                        <h1>TAB 2</h1>
                    )
                }

                {
                    activeTab === 3 && (
                        <h1>TAB 3</h1>
                    )
                }
            </div>
        </div>
    )
}

export default NavChoiceCourse