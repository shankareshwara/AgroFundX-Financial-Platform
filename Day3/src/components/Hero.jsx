import React from 'react'
import Typewriter from 'typewriter-effect';
import '../assets/css/Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div style={{paddingTop:"200px",marginLeft:"50px"}}>
                    <h1 id="hero-text" style={{fontFamily:"'Titillium Web', sans-serif ",color:"#fc3355",marginBottom:"60px"}}> <Typewriter
                        options={{
                            strings: ['Tiny seeds, mighty dreams.','Rooted resilience.','Sow, grow, glow.','Rooted in love.' ],
                            autoStart: true,
                            loop: true,
                            delay:50
                        }}
                    /></h1>
                </div>
            </div>
        </div>
    )
}

export default Hero