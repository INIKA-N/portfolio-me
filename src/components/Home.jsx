import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa'; // Ensure FaLeetcode is imported
import { SiLeetcode } from "react-icons/si";
import './Home.css';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import myImage from '../assets/myImage.jpg'; // Relative path from the current file

function Home() {
    const [name, setName] = useState('INIKA');

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='content'>
                    <div className='name'>
                        <h4>Hello, I am</h4>
                        <h3
                            onMouseOver={() => setName('Developer')}
                            onMouseLeave={() => setName('INIKA')}
                        >
                            {name}
                        </h3>
                    </div>
                    <div className='line'></div>
                    <div className='sk'>
                        <p>ux designer / front end developer</p>
                    </div>
                    <div className='line'></div>
                    <div className='social-icons'>
                        <a href='https://www.linkedin.com/in/inika-n-ab953924b/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin />
                        </a>
                        <a href='https://github.com/INIKA-N' target='_blank' rel='noopener noreferrer'>
                            <FaGithub />
                        </a>
                        <a href='https://www.kaggle.com/inikan' target='_blank' rel='noopener noreferrer'>
                            <FaKaggle />
                        </a>
                        <a href='https://leetcode.com/21CSR065/' target='_blank' rel='noopener noreferrer'>
                        <SiLeetcode />
                        </a>
                    </div>
                    <a href="/Home">
                        <button type="submit" className="btn">Download CV</button>
                    </a>
                </div>
                <div className='image'>
                    <img src={myImage} alt="My Image" /> {/* Use the imported image */}
                </div>
            </div>
        </>
    );
}

export default Home;
