import React from 'react'
import IlustrationLearn from '../../../components/imageSvg/ilustrationLearn'

function CardHome() {


    const data = [
        {
            title: "What do you want to learn today?",
            image: "https://www.freecodecamp.org/news/content/images/2023/01/learn-to-code-1.png",
            link: "/learn"
        },
        {
            title: "What do you want to learn today?",
            image: "https://www.freecodecamp.org/news/content/images/2023/01/learn-to-code-1.png",
            link: "/learn"
        }
    ]

    return (
        <div className='w-[210px] h-[120px] bg-[#CEECFE] rounded-md p-4 relative text-[12px] ' >
            <p className='font-semibold' >What do you want to learn today ?</p>
            <div className='flex justify-between mt-5 ' >
                <button className='bg-[#FF6905] text-white h-[30px] w-[85px] border-none rounded-md text-center text-[10px] '>Get Started</button>

                <div className='absolute right-[-5px] z-[99] top-[20px]  ' >
                    <IlustrationLearn />
                </div>
            </div>
        </div>
    )
}

export default CardHome