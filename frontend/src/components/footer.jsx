import React from "react";

function Footer() {
    console.log("Footer rendered");
    return (
        <footer className="bg-light">
            <div className="bg-dark border border-purple-500 p-4 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <a href="#" className="text-primary h2 me-3"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-danger h2 me-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-danger h2"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="d-flex align-items-center">
                    <i className="fas fa-phone h2 me-2"></i>
                    <span className="text-white">Contact us</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
