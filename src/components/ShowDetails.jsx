import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';
import HomeLayout from './Layout/HomeLayout';

function ShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState({});
    console.log(show)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
            setShow(response.data);
        };

        fetchData();
    }, [id]);

    return (
        <HomeLayout>
            <div className="container lg:p-0 p-4 flex lg:flex-row md:flex-row flex-col mx-auto mt-8 gap-4">
                <div className='lg:w-[75%] md:w-[70%] w-[100%]'>
                    <h2 className="text-2xl text-white lg:text-start text-center font-semibold mb-4">{show.name}</h2>
                    <div className='flex lg:flex-row flex-col gap-4'>
                        <img className='lg:w-[300px] w-[100%]' src={show?.image?.original || "https://m.media-amazon.com/images/M/MV5BMjI0NDE2OTA4Ml5BMl5BanBnXkFtZTcwODU5NzQzOQ@@._V1_.jpg"} alt="" />
                        <div>
                            <p className="text-white mb-4 text-md leading-6 hi"
                                dangerouslySetInnerHTML={{ __html: show.summary }}
                            ></p>
                            <div className='text-white'>
                                <div className='flex gap-4 py-2'>
                                    <span className='font-medium'>Langauge:</span>
                                    <p>{show.language}</p>
                                </div>
                                <hr />
                                <div className='flex gap-4 py-2'>
                                    <span className='font-medium'>Genres:</span>
                                    {
                                        show?.genres?.map((genre, i) => (<p key={i}> {genre}</p>))
                                    }
                                </div>
                                <hr />
                                <div className='flex gap-4 py-2'>
                                    <span className='font-medium'>Timezone:</span>
                                    <p>{show?.webChannel?.country?.timezone}</p>
                                </div>
                                <hr />
                                <div className='flex gap-4 py-2'>
                                    <span className='font-medium'>Type:</span>
                                    <p>{show?.type}</p>
                                </div>
                                <hr />
                                <div className='flex gap-4 py-2'>
                                    <span className='font-medium'>Premiered:</span>
                                    <p>{show?.premiered}</p>
                                </div>
                                <hr />
                                <div className='flex gap-4 py-2'>
                                    <span className='font-medium'>Rating:</span>
                                    <p>{show?.rating?.average}</p>
                                </div>
                                <hr />
                                <div className='flex gap-4 py-2'>
                                    <span className='font-medium'>OfficialSite:</span>
                                    <p>{show?.officialSite}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[25%] md:w-[30%] w-[100%] md:sticky md:top-[50%]'>
                    <BookingForm showName={show.name} />
                </div>
            </div>
        </HomeLayout>
    );
}

export default ShowDetails