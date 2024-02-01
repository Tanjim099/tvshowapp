import React from 'react'
import { NavLink } from 'react-router-dom'

function ShowCard({ name, image, genres, id }) {
    return (
        <NavLink to={`show/${id}`} className='shadow-md bg-white'>
            <div className='pt-3 px-2 pb-0'>
                <img className='h-[250px] w-full' src={image || "https://m.media-amazon.com/images/M/MV5BMjI0NDE2OTA4Ml5BMl5BanBnXkFtZTcwODU5NzQzOQ@@._V1_.jpg"} alt="" />
            </div>
            <div className='px-3 pt-1'>
                <h3 className=' font-medium'>{name}</h3>
            </div>
            <div className='flex gap-2 px-3 pb-1'>
                {
                    genres?.map((genre, i) => (<p key={i}> {genre}</p>))
                }
            </div>
        </NavLink>
    )
}

export default ShowCard