import { FaBars, FaTimes } from "react-icons/fa"
// import Logo from "/image/Logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"



export const Nav =  () => {

const Logo = "https://raw.githubusercontent.com/sheffar/nifesattandance/main/uploads/Logo.png"


  





    return (
        <>
            <div className="flex  gap-3 sticky top-0 right-0 z-50 justify-between p-2 lg:px-16 md:pb-4 shadow-black shadow-sm bg-white items-center mb-5 " >
                <div className="cursor-pointer">
                     <img src={Logo} className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover" alt="Logo" />
                </div>

                <div className=" flex gap-2  md:gap-5">
                    <p className="text-sm  md:text-lg text-center font-bold">SINGLES CONFRENCE <span className="text-orange-500 ">2024</span></p>
                    <p className="text-sm md:text-lg  font-bold text-center">  Admin Dashboard</p>
                </div>


            </div>
        </>
    )
}


