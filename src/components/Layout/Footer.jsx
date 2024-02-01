import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content" style={{
            backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.93))"
        }}>
            <nav className=' text-white'>
                <h6 className="footer-title">Plays in Top Cities</h6>
                <Link className="link link-hover">Mumbai</Link>
                <Link className="link link-hover">Delhi-NCR</Link>
                <Link className="link link-hover">Chennai</Link>
                <Link className="link link-hover">Bengaluru</Link>
            </nav>
            <nav className=' text-white'>
                <h6 className="footer-title">Company</h6>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </nav>
            <nav className=' text-white'>
                <h6 className="footer-title">Legal</h6>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </nav>
            <form className=' text-white'>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn bg-red-600 join-item text-white">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer