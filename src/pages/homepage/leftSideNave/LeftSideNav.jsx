import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div>
            <h2 className="text-xl font-bold">All Caterogy</h2>
            <h2 className='py-8 text-xl text-center font-semibold px-2 bg-gray-300 mt-5'>National News</h2>
            <div className='space-y-6 mt-5 ml-10'>
                {
                    categories.map((categori, idx) => <Link to={`/category/${categori.id}`} className='block text-xl text-gray-500' key={idx}>{categori.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;