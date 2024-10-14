import Lottie from "lottie-react";
import bg from "../assets/service.json";
import arrowicon from "../assets/arrow-icon.json";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "React/Next JS Design",
      description: "High-performance websites using React JS and Next JS.",
      image: "https://via.placeholder.com/600x400?text=React+Next+JS+Design",
      details:
        "I specialize in building dynamic, high-performance websites using React and Next JS frameworks. These modern technologies ensure fast load times, smooth navigation, and scalable applications that enhance user experience. Whether it's a single-page application or a complex website, React/Next JS delivers flexibility and reliability for your digital success.",
    },
    {
      id: 2,
      title: "WordPress Design",
      description: "Custom WordPress designs that are easy to manage.",
      image: "https://via.placeholder.com/600x400?text=WordPress+Design",
      details:
        "My WordPress design services provide you with a flexible and customizable platform that's both powerful and easy to manage. From custom themes to advanced functionality, I help create WordPress websites that look stunning, are SEO-optimized, and can be easily updated by you without needing technical expertise.",
    },
    {
      id: 3,
      title: "Webflow & Squarespace Design",
      description:
        "Beautiful, functional websites with Webflow and Squarespace.",
      image:
        "https://via.placeholder.com/600x400?text=Webflow+%26+Squarespace+Design",
      details:
        "I design visually stunning websites using Webflow and Squarespace, giving you powerful tools to manage your online presence. These platforms offer intuitive drag-and-drop interfaces, making it easy to update content while maintaining a professional look. Ideal for businesses that need rapid deployment and customization without coding.",
    },
    {
      id: 4,
      title: "Custom Web Design",
      description:
        "Tailored, user-friendly web designs that engage your audience.",
      image: "https://via.placeholder.com/600x400?text=Custom+Web+Design",
      details:
        "I offer bespoke web design services, creating websites that are uniquely tailored to your brand and vision. My custom designs are focused on delivering engaging user experiences, ensuring seamless navigation and a compelling digital presence that resonates with your target audience.",
    },
  ];

  return (
    <div className="service-container">
      <div className="services">
        <div className="service">
          <div className="services-animation">
            <Lottie
              animationData={bg}
              style={{ height: "350px", width: "350px" }}
            />
          </div>
          <div className="change-place">
            <div className="container">
              <div className="service-text ">
                <h4>Innovative Design Solutions</h4>
                <h1>For Your Digital Success</h1>
              </div>
              <div style={{ marginTop: "100px" }}>
                {services.map((service) => (
                  <div key={service.id}>
                    <div className="services-grid-container">
                      <div className="number">
                        <h1>{service.id} .</h1>
                      </div>
                      <div className="service-content">
                        <div className="service-content-description">
                          <h2>{service.title}</h2>
                          <p>{service.details}</p>
                        </div>
                        <div className="service-link">
                          <a href="">
                            <Lottie
                              animationData={arrowicon}
                              style={{ height: "90px", width: "90px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="services-grid-container">
                <div className="number"></div>
                <div className="service-content">
                  <div className="service-content-description">
                    <a href="" className="common-btn">Explore All Services</a>
                    
                  </div>
                  <div className="service-link"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
