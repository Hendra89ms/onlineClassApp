import React from 'react'

function Message() {
    return (
        <div className='flex flex-col gap-4' >
            <div className='shadow-md flex justify-between  p-4 rounded-md' >
                <div className='flex gap-3' >
                    <div className='bg-[#D8FFEF] w-[48px] h-[48px]' ></div>
                    <div>
                        <h1>Bert Pullman</h1>
                        <p>Online</p>
                    </div>
                </div>

                <p>04:32 pm</p>

            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur est, quidem ullam temporibus, similique consequuntur dolorem neque id ea facere incidunt quam, ipsum voluptas quos ut mollitia. Fuga error culpa unde officia obcaecati velit aspernatur eveniet ad iste corporis?</p>
        </div>
    )
}

export default Message