// src/components/Poster.js
import React from 'react';
import ButtonBooking
    from './buttons/booking';

function Poster({ image, title }) {
    return (
        <div className="bg-blue-900 flex items-center justify-center">
            <div className="text-center">
                <div className="mt-4">
                    <img alt="Movie poster of `${title}`" className="mx-auto" height="450" src={image} width="300" />
                </div>
                <div className="mt-4 text-white text-lg font-bold">
                    {title}
                </div>
                <div className="mt-4 flex justify-center items-center space-x-4">
                    <button className="flex items-center bg-white text-blue-900 px-4 py-2 rounded-full">
                        <i className="fas fa-play-circle mr-2">
                        </i>
                        Xem Trailer
                    </button>
                    <ButtonBooking></ButtonBooking>
                </div>
            </div>
        </div>
    );
}

export default Poster;
