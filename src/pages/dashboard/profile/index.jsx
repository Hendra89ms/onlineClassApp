import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function ProfileAccount() {


    const [showActionProfil, setShowActionProfil] = useState(false);
    const navigate = useNavigate();
    const actionRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (actionRef.current && !actionRef.current.contains(event.target)) {
                setShowActionProfil(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleAccountClick = () => setShowActionProfil(!showActionProfil)


    return (
        <div>
            <div
                className="bg-[#858597] w-[50px] h-[50px] rounded-full cursor-pointer"
                onClick={handleAccountClick}
            ></div>

            <div className="relative" >
                {showActionProfil && (
                    <div ref={actionRef} className="absolute right-0 top-[10px] bg-white shadow-md rounded-md w-[200px] z-10">
                        <ul className="p-2">
                            <li onClick={() => {
                                navigate('/account');
                            }} className="py-2 px-4 hover:bg-gray-100 text-black cursor-pointer">Profile</li>
                            <li className="py-2 px-4 hover:bg-gray-100 text-black cursor-pointer">Settings</li>
                            <li className="py-2 px-4 hover:bg-gray-100 text-black cursor-pointer" onClick={
                                () => {
                                    navigate('/login');
                                }
                            }>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileAccount