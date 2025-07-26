import React from 'react'
import Message from './message';

function AllMessage() {

    const [activeTab, setActiveTab] = React.useState("msg");

    return (
        <div className='mt-5' >
            <h1 className='font-semibold text-xl ' >Notifications</h1>

            <div className='flex gap-3 mt-3 justify-evenly ' >
                {/* AllMessage */}
                <div className='cursor-pointer' onClick={() => {
                    setActiveTab("msg");
                }} >
                    <h1>message</h1>
                    {activeTab === "msg" && (<div className='border-[2px] border-[#3D5CFF] mt-2' ></div>)}
                </div>

                {/* Notification */}
                <div className='cursor-pointer' onClick={() => {
                    setActiveTab("not");
                }} >
                    <h1>notification</h1>
                    {activeTab === "not" && (<div className='border-[2px] border-[#3D5CFF] mt-2' ></div>)}
                </div>
            </div>

            <div className='mt-5' >
                {activeTab === "msg" && (
                    <Message />
                )}
                {activeTab === "not" && (
                    <div className='text-center text-gray-500'>No notifications yet</div>
                )}
            </div>
        </div>
    )
}

export default AllMessage
