import Lottie from 'lottie-react';
import animation from '../assets/mTBhkuy8CW.json'
import arrow from '../assets/arrow.json'

const Home = () => {
    return (
        <div className='home'>
           <div className="animation">
           <Lottie
           animationData={animation}
           style={{ height: '600px', width: '700px' }}

           />
           </div>
            <div className="container">
               <div className="hero-content">
                <h1>Build next generation websites <br /> 
                <span>like never before</span> <span className="lottie">
                <Lottie
                 animationData={arrow}
                  style={{ height: '90px', width: '100px' }}

           /> </span>  </h1>

           <p>Bring your vision to life with stunning, next-level web designs that captivate and convert. I craft beautiful, user-friendly websites using platforms like React JS, Next JS, WordPress, Webador, Webflow, and Squarespace. Focused on design excellence, I ensure your brand shines online and leaves a lasting impression. Let’s create something extraordinary!</p>

            <a href="" className='common-btn'>Let’s Get Started</a>
               </div>
            </div>
            
        </div>
    );
};

export default Home;