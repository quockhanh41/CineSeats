import React from "react";
import Poster from "../../components/poster";

// Import image 
import MovieImage1 from "../../assets/bocchi-the-rock-recap-part-2.jpg"
import MovieImage2 from "../../assets/blink-twice.jpg"


function HomePage() {
    const movies = [
        {
            title: "Boochi The Rock",
            image: MovieImage1
        },
        {
            title: "Blink Twice",
            image: MovieImage2
        }
    ]

    return (
        <>
            <div className="bg-blue-900 flex min-h-full p-6 space-x-5 justify-center">
                {movies.map((movie, index) => (
                    <Poster key={index} image={movie.image} title={movie.title}></Poster>
                ))}
            </div>
        </>
    );
}

export default HomePage;