import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to the To-Do List App</h1>
                <p className="text-lg mb-6">Manage your tasks effectively and stay organized.</p>
                <div className="space-x-4">
                    <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
                    <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
