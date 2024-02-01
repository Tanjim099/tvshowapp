import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function HomeLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main className='lg:w-[80%] m-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout