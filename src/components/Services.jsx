import Lottie from "lottie-react";
import bg from '../assets/service.json'

const Services = () => {
    return (
        <div className="service-container">
        <div className="services">
            <div className="service">
            <div className="services-animation">
            <Lottie
           animationData={bg}
           style={{ height: '400px', width: '400px' }}
           />
            </div>
            <div className="change-place">
                <div className="container">
                    <div className="service-text ">
                        <h4>Innovative Design Solutions</h4>
                        <h1>For Your Digital Success</h1>
                    </div></div>
                </div>
            </div>
        </div></div>
    );
};

export default Services;