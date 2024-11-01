import React from 'react';

function Header() {
    return (
        <header className="d-flex align-items-center justify-content-between p-4 border-bottom">
            <div className="d-flex align-items-center">
                <img alt="Company logo" className="h-12 w-12" height="50" src="https://storage.googleapis.com/a1aa/image/2um8YNI9XeT5eEEvEaROXvye9Tj7LBmCD70OeaNKP7gML8vOB.jpg" width="50" />
            </div>
            <div className="d-flex align-items-center">
                <div className="position-relative me-4">
                    <input className="form-control pl-5" placeholder="Search movies, cinemas" type="text" />
                    <i className="fas fa-bars position-absolute left-3 top-50 translate-middle-y text-secondary"></i>
                    <i className="fas fa-search position-absolute right-3 top-50 translate-middle-y text-secondary"></i>
                </div>
                <button className="btn btn-outline-secondary me-2">Sign in</button>
                <button className="btn btn-dark">Register</button>
            </div>
        </header>
    );
}

export default Header;
