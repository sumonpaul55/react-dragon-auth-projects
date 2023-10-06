import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex items-center my-10 bg-gray-200 p-2'>
            <button className="btn btn-secondary rounded-none px-9 py-4">Latest</button>
            <Marquee pauseOnHover speed={100}>
                <Link className='mr-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus!</Link>
                <Link className='mr-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus!</Link>
                <Link className='mr-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus!</Link>
                <Link className='mr-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus!</Link>
                <Link className='mr-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus!</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;