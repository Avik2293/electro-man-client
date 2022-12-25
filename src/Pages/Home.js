import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../Assets/home_bg.jpg';
import Stat from '../Components/Stat';
import StayConnect from '../Components/StayConnect';

const Home = () => {
    return (
        <div>
            <div className="hero h-min" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content m-10">
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="max-w-2xl">
                        <h1 className="mb-5 text-6xl font-bold">Hello Electrical Lover...</h1>
                        <p className="mb-5">Electro Man is here for You always. We always try to provide good courses for your knowledge hungry brain with good Instructor and Professors. All they are waiting for your Click.</p>
                        <button className="btn btn-primary"><Link to={'/courses'}>Find Courses</Link></button>
                    </div>
                </div>
            </div>
            <div className='w-5/6 inline-block align-baseline'>
                <Stat></Stat>
                <StayConnect></StayConnect>
            </div>
        </div>
    );
};

export default Home;