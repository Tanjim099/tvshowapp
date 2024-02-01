import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ShowCard from './ShowCard';
import HomeLayout from './Layout/HomeLayout';

function ShowList() {
    const [shows, setShows] = useState([]);
    console.log(shows);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            console.log(response)
            setShows(response.data);
        };

        fetchData();
    }, []);

    return (
        <HomeLayout>
            <div className="container mx-auto my-8">
                <h1 className="text-3xl text-center text-white font-semibold mb-4">TV Shows</h1>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 p-0 m-0'>
                    {shows.map((show, i) => (
                        <ShowCard key={i} name={show?.show?.name} image={show?.show?.image?.medium} genres={show?.show?.genres} id={show?.show?.id} />
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
}

export default ShowList