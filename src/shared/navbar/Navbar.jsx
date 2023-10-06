import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userdefault from "../../assets/user.png"
const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className='flex justify-between'>

                <ul className='gap-5 flex-1 flex items-center justify-center'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                    <li><NavLink>Career</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
                <div className="nav-right flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={userdefault} />
                        </div>
                    </div>
                    <Link to='/login'>
                        <button className=' btn bg-gray-700 text-center text-white md:px-16 hover:text-black rounded-none'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;