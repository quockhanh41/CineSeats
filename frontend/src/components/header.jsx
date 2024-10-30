// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <img alt="Company logo" className="h-12 w-12" height="50" src="https://storage.googleapis.com/a1aa/image/2um8YNI9XeT5eEEvEaROXvye9Tj7LBmCD70OeaNKP7gML8vOB.jpg" width="50" />
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Search movies, cinemas" type="text" />
                    <i className="fas fa-bars absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    </i>
                    <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    </i>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-full">
                    Sign in
                </button>
                <button className="px-4 py-2 bg-black text-white rounded-full">
                    Register
                </button>
            </div>
        </header>
    );
}

export default Header;
