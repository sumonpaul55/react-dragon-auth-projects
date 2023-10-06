import React from 'react';
import Header from '../../shared/header/Header';
import Navbar from '../../shared/navbar/Navbar';
import LeftSideNav from './leftSideNave/LeftSideNav';
import RightNav from '../../shared/rightSideNav/RightNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border'>
                    <h2 className="text-3xl font-poppins">this is home</h2>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;