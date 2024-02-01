import React, { useState } from 'react'

function BookingForm({ showName }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("tvshow", JSON.stringify(formData));
        setFormData({
            name: "",
            email: "",
            date: ""
        })
        formData.name = "";
        formData.email = "";
        formData.date = ""
        console.log("clicked")
    };

    return (
        <div className="mt-8 shadow-md w-[100%] p-2">
            <h3 className="text-xl text-white text-center font-semibold mb-4">Book Tickets</h3>
            <form onSubmit={handleSubmit} className='w-100 flex flex-col gap-4'>
                <div className='text-white'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='enter name...'
                        className=" w-full shadow-xs p-2 border-2 rounded-md outline-none"

                    />
                </div>
                <div className='text-white'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='enter email...'
                        className="  w-full shadow-xs p-2 border-2 rounded-md outline-none"
                    />
                </div>
                <div className='text-white'>
                    <label htmlFor="date">Data</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className=" w-full shadow-xs p-2 border-2 rounded-md outline-none placeholder:text-black"
                    />
                </div>
                <p className="text-white mb-2"><span className=' font-medium'>Movie:</span> {showName}</p>
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
}

export default BookingForm