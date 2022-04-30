import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom'

const Scheme = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-center font-mono z-20 glow font-link cursor-default'>

                <p className='glitch text-sm mb-20'>thought</p>
                <p className='glitch text-xl'>would</p>
                <p className='glitch text-cyan-400 mb-32 text-xl'>age&nbsp;&nbsp;&nbsp;and die</p>
                <p className='glitch text-3xl'>each&nbsp;&nbsp;&nbsp;night</p>
                <p className='glitch mb-48 text-3xl'>a&nbsp;
                 <Link to='/mortal'>
                    <span className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>mortal</span>
                 </Link>
                </p>
                <p className='glitch'>maid to&nbsp; 
                    <Link to='/consumate'>
                        <span className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-black hover:uppercase'>consumate</span>
                    </Link>
                </p>
                
            </div>
            
        </div>
    )
}

export default Scheme;