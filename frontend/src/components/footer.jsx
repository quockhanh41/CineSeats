import React from "react";

function Footer() {
    console.log("Footer rendered");
    return (
        <footer className="bg-gray-200">
            <div className="bg-gray-700 border-2 border-purple-500 p-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 text-2xl"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-pink-600 text-2xl"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-red-600 text-2xl"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-phone text-2xl"></i>
                    <span className="text-white">Contact us</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
