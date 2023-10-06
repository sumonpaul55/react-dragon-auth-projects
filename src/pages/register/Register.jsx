import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo")
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo, email, password)
    }
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full md:max-w-[50%] mx-auto mt-10 shadow-2xl bg-base-100 py-5">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" placeholder="Photo url" className="input input-bordered" name='photo' required />
                    </div>
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
                <p className='flex items-center gap-2 justify-center'>Do not have an Account? <Link className='text-red-500' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Register;