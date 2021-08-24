import React from 'react'
import './style.css';

function About() {
    return (
        <div className="about-wrap">
            <div >
                <h1>About Us</h1>
                <p>something something something</p>
                <div className='links'>
                    <a href="https://www.youtube.com/channel/UCVq0sbGhah7maKhUp-lAzlg" className='youtube'>YouTube</a>
                    <a href="https://mobile.twitter.com/n0b0dysn0thing" className="twitter">Twitter</a>
                    <a href="https://www.instagram.com/thisaintradiopodcast/" className='instagram'>Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default About
