import React from 'react'
import PeopleImg from "../../../assets/people.png"

function TabOne() {

    const dataAll = [
        {
            id: 1,
            title: "Product Design V1.0",
            instructor: "Robertson Connie",
            price: "$190",
            duration: "16 hours"
        },
        {
            id: 2,
            title: "Web Development Basics",
            instructor: "Jane Doe",
            price: "$150",
            duration: "10 hours"
        },
        {
            id: 3,
            title: "Advanced JavaScript",
            instructor: "John Smith",
            price: "$200",
            duration: "20 hours"
        }
    ]

    return (
        <>
            {
                dataAll.map((item) => {
                    return (
                        <div className='flex gap-8 p-3 shadow-md text-[12px] rounded-md' >
                            <div className='w-[68px] h-[68px] bg-[#C4C4C4] rounded-md' ></div>

                            <div className='flex flex-col gap-3 w-full' >
                                <h1 className='font-semibold' >{item.title}</h1>
                                <div className='flex gap-2 items-center' >
                                    <img src={PeopleImg} alt="people" className='w-[12px] h-[12px] rounded-full' />
                                    <h1>{item.instructor}</h1>
                                </div>
                                <div className='flex gap-3' >
                                    <span className='font-semibold'>{item.price}</span>
                                    <span className='bg-[#FFEBF0] w-[100px] rounded-xl text-red-500 px-3 flex justify-center items-center' >{item.duration}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TabOne