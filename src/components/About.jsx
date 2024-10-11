import React from 'react';
import animation from '../assets/about-2.json'
import arrow from '../assets/arroww.json'
import Lottie from 'lottie-react';

const About = () => {
    
    return (
        <div className='about-section'>
        <div className="overlay"></div>
        <div className='about'>
            <div className="about-lottie-animation">
            <Lottie
           animationData={animation}
           style={{ height: '600px', width: '700px' }}

           />
            </div>
            
        </div>
        <div className="about-position-changing">
        <div className="container">
            <div className="row">
                <div className="about-content">
                <h4>About Me</h4>
                <h1>Frontend Developer</h1>
                <p>Hi, I’m Riaz, a dedicated web designer with over two years of experience in crafting beautiful, functional websites that captivate audiences. I specialize in platforms such as React JS, Next JS, WordPress, Webador, Webflow, and Squarespace, allowing me to create dynamic and visually striking designs tailored to each client’s needs. My approach focuses on balancing aesthetics with usability, ensuring that every website not only looks impressive but also provides a seamless, engaging user experience.</p>

                <p>With a passion for creativity and a keen eye for detail, I’m committed to delivering high-quality designs that reflect your brand’s identity and goals. Whether you need a new website from scratch or a fresh design for your existing site, I’m here to help you create an impactful online presence.Let’s collaborate and bring your vision to life!</p>
                <a href="" className="common-btn">View My Work</a>

                <span className="arrow-position-change">
                <Lottie
           animationData={arrow}
           style={{ height: '260px', width: '260px' }}

           />
              
                </span>
               </div>

               {/* about img */}
               <div className="about-section-image">
               <div className="about-img">
               </div>
               </div>
            </div>
        </div></div>
        </div>
    );
};

export default About;