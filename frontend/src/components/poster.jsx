import React from 'react';
import ButtonBooking from './buttons/booking';

function Poster({ image, title }) {
    return (
        <div className="bg-primary d-flex align-items-center justify-content-center">
            <div className="text-center">
                <div className="mt-4">
                    <img alt={`Movie poster of ${title}`} className="mx-auto" height="450" src={image} width="300" />
                </div>
                <div className="mt-4 text-white h5 font-weight-bold">
                    {title}
                </div>
                <div className="mt-4 d-flex justify-content-center align-items-center">
                    <button className="btn btn-light text-primary me-2">
                        <i className="fas fa-play-circle me-2"></i>
                        Xem Trailer
                    </button>
                    <ButtonBooking />
                </div>
            </div>
        </div>
    );
}

export default Poster;
