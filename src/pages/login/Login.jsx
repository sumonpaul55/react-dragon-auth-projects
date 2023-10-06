import React from 'react';
import Navbar from '../../../shared/navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const formdata = new FormData(e.currentTarget)
        console.log(formdata.get("email"), formdata.get("password"))
    }
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full md:max-w-[50%] mx-auto mt-10 shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        <label className="label">
                            <button className="label-text-alt link link-hover">Forgot password?</button>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='flex items-center gap-2'>Do not have an Account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;