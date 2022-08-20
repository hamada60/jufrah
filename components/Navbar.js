import { useState } from "react";

import Image from "next/image";

import { FaBeer, FaListUl } from 'react-icons/fa';
import { AiOutlineClose, AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai';



import logo from '../public/image/logo.png';

export default function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <nav className="p-2 shadow-md md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
            <span className="text-2xl cursor-pointer text-white">
                <Image src={logo} width={200} height={40} />
            </span>
            <span className="text-3xl cursor-pointer md:hidden block">
                {open ? <AiOutlineClose onClick={() => setOpen(false)} /> : <FaListUl onClick={() => setOpen(true)} />}
            </span>
        </div>
        <div className={`md:flex md:items-center gap-6 z-10 md:z-auto md:static absolute bg-cyan-200 md:bg-inherit w-full left-0 md:w-auto md:opacity-100 ${open? 'top-20' : 'top-[-400px]'} transition-all duration-500 ease-in`}>
            <div className="md:flex items-center mx-4 my-5 md:my-0 md:mx-0">
                <div className="xl:w-auto">
                    <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
                        <option selected>Select Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="md:flex items-center justify-center mx-4 my-5 md:my-0 md:mx-0">
                <div className="flex flex-col md:flex-row md:inline-flex" role="group">
                    <input type="text"  placeholder="الـمـوقـع" className="rounded md:rounded-none md:rounded-r px-2 py-2 border-2 border-red-600 font-medium  text-sm leading-tight outline-none m-2 md:m-0 " />
                    <input type="text" placeholder="ابـحث فـى الاعـلانـات" className="px-2 py-2 rounded md:rounded-none border-2 md:border-r-0 border-red-600 font-medium text-sm leading-tight outline-none m-2 md:m-0 " />
                    <button type="button" className="rounded md:rounded-none md:rounded-l flex justify-center px-6 py-2 border-0  bg-cyan-300  text-red-600 font-medium text-xs leading-tight  transition duration-150 ease-in-out m-2 md:m-0 ">
                        <AiOutlineSearch className="text-2xl" />
                    </button>
                </div>
            </div>
            <div className="mx-4 my-5 md:my-0 md:mx-0">
                <button className="w-full flex items-center justify-center gap-1 px-5 rounded h-10 bg-red-600">نــشر إعــلان <AiOutlinePlusCircle className="text-white text-2xl  " /></button>
            </div>
        </div>
    </nav>
  )
}
