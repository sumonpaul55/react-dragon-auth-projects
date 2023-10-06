import React from 'react';
import logo from "../../assets/logo.png";
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-3'>
            <img src={logo} alt="logo" className='mx-auto' />
            <p className='text-lg text-gray-500'>Journalism Without Fear or Favour</p>
            <div className='flex items-center gap-3 justify-center'>
                <p className="text-xl">{moment().format("dddd")}</p>
                <p className="text-xl text-gray-500">{moment().format("MMMM, d, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;