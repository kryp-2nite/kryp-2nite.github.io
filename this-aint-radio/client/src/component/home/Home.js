import React from 'react'
import About from '../about/About'
import Bio from '../bio/Bio';
import './style.css';

function Home() {
    return (
        <div>
            <h1 className='title'>This Ain't Radio Podcast</h1>
            <div className='bio'>
                <Bio />
            </div>
            <div className='about'>
                <About />
            </div>
        </div>
    )
}

export default Home
