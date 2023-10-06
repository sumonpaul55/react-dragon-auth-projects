import React from 'react';
import { BsGoogle, BsTwitter } from "react-icons/bs"
import { TbBrandGithubFilled } from "react-icons/tb"
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import qzone from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"
const RightNav = () => {
    return (
        <div>
            <div className='space-y-4 mb-10'>

                <h2 className='text-xl md:text-3xl font-bold'>Login With</h2>
                <button className='text-blue-500 w-full flex items-center p-3 gap-3 border cursor-pointer rounded-lg text-xl'>
                    <BsGoogle></BsGoogle>
                    <span>Login with google</span>
                </button>
                <button className='text-black-500 w-full flex items-center p-3 gap-3 border cursor-pointer rounded-lg text-xl'>
                    <TbBrandGithubFilled></TbBrandGithubFilled>
                    <span>Login with github</span>
                </button>
            </div>
            <div className='mb-6'>
                <h2 className='text-xl md:text-3xl font-bold mb-6'>Find Us On</h2>
                <div className='border border-b-0 p-2 py-4 rounded-t-lg'>
                    <a href="" className='flex gap-3 items-center text-xl text-gray-600'><span className='bg-gray-300 p-2 rounded-full text-blue-400'><FaFacebookF></FaFacebookF></span> Facebook</a>
                </div>
                <div className='border p-2 py-4'>
                    <a href="" className='flex gap-3 items-center text-xl text-gray-600'><span className='bg-gray-300 p-2 rounded-full text-blue-400'><BsTwitter></BsTwitter></span> Twitter</a>
                </div>
                <div className='border border-t-0 p-2 py-4 rounded-b-lg'>
                    <a href="" className='flex gap-3 items-center text-xl text-gray-600'><span className='bg-gray-300 p-2 rounded-full text-red-500'><AiFillInstagram></AiFillInstagram></span> Instagram</a>
                </div>
            </div>

            <div className='mb-6 bg-gray-300 p-3'>
                <h2 className='text-xl md:text-3xl font-bold mb-6'>Qzone</h2>
                <div className='space-y-5'>
                    <img src={qzone} alt="qzone" className='w-full' />
                    <img src={qzone2} alt="qzone" className='w-full' />
                    <img src={qzone3} alt="qzone" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default RightNav; <h3 className="text-3xl">Right side nav</h3>