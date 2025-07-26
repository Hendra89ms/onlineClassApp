import React from 'react'
import ProfileAccount from './profile'
import SearchBox from '../../components/searchBox'
import FrameLanguage from '../../components/imageSvg/frameLanguage'
import FramePainting from '../../components/imageSvg/framePainting'
import NavChoiceCourse from './navChoice'

function Course() {
  return (
    <div className='mt-5' >
      <div className='w-full flex justify-between items-center' >
        <h1 className='text-[24px] font-bold' >Course</h1>


        <ProfileAccount />
      </div>

      {/* <input placeholder='Find Course' className='bg-[#F4F3FD] border-none outline-none' /> */}
      <div className='mt-3' >
        <SearchBox />
      </div>

      <div className='mt-5 flex justify-between px-5 ' >

        <div className='w-[180px] h-[108px] bg-[#CEECFE] rounded-md flex justify-between relative'>
          <div className='absolute top-[-5px]' >
            <FrameLanguage />
          </div>
          <button className='bg-[#F3FBFF] border-none outline-none border[1px] text-[12px] h-[40px] rounded-l-xl absolute bottom-2 right-0 flex justify-center items-center pl-3' >Language</button>
        </div>


        <div className='w-[180px] h-[108px] bg-[#EFE0FF] rounded-md flex justify-between relative'>
          <div className='absolute top-[-5px]' >
            <FramePainting />
          </div>
          <button className='bg-[#F3FBFF] border-none outline-none border[1px] text-[12px] h-[40px] rounded-l-xl absolute bottom-2 right-0 flex justify-center items-center pl-3' >Painting</button>
        </div>
      </div>

      <p className='font-semibold mt-7' >Choose Your Course</p>

      <NavChoiceCourse />

    </div>
  )
}

export default Course
