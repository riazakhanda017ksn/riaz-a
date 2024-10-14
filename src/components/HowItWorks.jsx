import Lottie from "lottie-react";
import man from '../assets/man.json'
import pc from '../assets/lp.json'
import downarrow from '../assets/down-arrow.png'

const HowItWorks = () => {
    
    return (
        <div className='howItwork _space'>
            <div className="container">
                <h4>How It Works</h4>
                <h1>Creating Your Dream Website</h1>
                {/* card */}
                <div className="card-container">
                    <div className="lite-space">
                    <div className="single-card" style={{position:"relative"}}>
                        <div className="card-logo ">
                        <div className="card-logo-img">
                            <img src={downarrow} alt="" />
                            </div>
                            <span>
                            <Lottie
                            animationData={man}
                            style={{ height: "150px", width: "150px" }}
                           />
                            </span>
                            
                        </div>
                        <div className="arrow-container">
                            <div className="child-arrow">
                            
                            </div>
                        </div>
                        <div className="card-flex-content">
                            <div className="card-position-change">
                            <h4>Initial Consultation</h4>
                            <p>We start with a discussion to understand your needs and vision for your website. During this stage, I gather all the information required to design a site that aligns with your goals.</p></div>
                            <div className="arrow-position-change__">
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lite-space margin-spacing">
                    <div className="single-card">
                        
                        
                        <div className="card-flex-content">
                        <div className="card-logo new-logo">
                            <span>
                            <Lottie
                            animationData={pc}
                            style={{ height: "150px", width: "150px",position:'relative'}}
                           />
                            </span>
                        </div>
                        
                      
                            <div className="card-position-change new-position ">
                            <div className="card-logo-img new-card-image">
                            <img src={downarrow} alt="" />
                            </div>
                            
                            <h4>Design Proposal</h4>
                            <p>I present you with design mockups and prototypes based on our consultation. You’ll get a preview of how your website will look and feel, and I’ll make adjustments based on your feedback.</p></div>
                          
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HowItWorks;