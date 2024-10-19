import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../assets/project-image/react/full-1.png'
import img2 from '../assets/project-image/react/1.png'
import img3 from '../assets/project-image/react/4.png'
import img4 from '../assets/project-image/react/2.png'
import img5 from '../assets/project-image/react/5.jpeg'
import img6 from '../assets/project-image/react/3.jpeg'
import img7 from '../assets/project-image/react/6.jpeg'
import img8 from '../assets/project-image/react/7.png'
import img9 from '../assets/project-image/react/12.png'
import img10 from '../assets/project-image/react/13.png'
import img11 from '../assets/project-image/react/11.png'
import img12 from '../assets/project-image/react/8.png'
import img13 from '../assets/project-image/react/9.png'
import img14 from '../assets/project-image/react/10.png'
import Lottie from "lottie-react";
import arrowicon from "../assets/arrow-icon.json";


const tabs = ["all", "react/next js","HTML/CSS", "wordpress", "web ador", "webflow", "squarespace"];

const Projects = () => {
    const projects = [
        { id: 1, title: "Fashion Ecommerce", category: "react/next js", image: img1, description: "A modern full-stack eCommerce platform built with the MERN stack, designed to provide a seamless shopping experience for users, with features like secure user authentication, product search and filters, dynamic cart updates, and a smooth checkout process. Fully responsive, ensuring an easy shopping experience across all devices.", projectLink:"https://fashion-ecommerce.onrender.com/" },
        { id: 22, title: "2ABBU", category: "react/next js", image: img8, description: "This Next.js eCommerce application is a full-stack platform designed and developed from scratch, focusing on modern aesthetics and functionality. The project was completely redesigned using SCSS, creating a sleek, responsive, and visually appealing user interface. The application features a seamless shopping experience, with secure authentication, product search, filters, dynamic cart updates, and a smooth checkout process. Every design element was crafted to provide a clean and intuitive experience, optimized for performance across all devices.", projectLink:"https://2abbu.com/" },
        { id: 2, title: "Samsung", category: "react/next js", image: img2, description: "A sleek and modern website designed for the Samsung Z-Fold series, built using React JS and SCSS. The site features advanced animations and smooth scrolling interactions that create an engaging and interactive experience for visitors. Every scroll triggers a series of animations, perfectly showcasing the cutting-edge design of the Samsung Z-Fold devices.", projectLink:"https://preorderfoldable.vercel.app/" },
        { id: 3, title: "SpaceBox", category: "react/next js", image: img3, description: "An interactive and educational web app focused on the solar system, created using React JS, Three.js, Framer Motion, and CSS. The app offers users a dynamic 3D solar system visualization, along with engaging features such as a quiz game, solar system exploration game, and sections on space history and future space missions. The project combines educational content with immersive 3D experiences to captivate space enthusiasts of all ages.", projectLink:"https://spacebox-v2.netlify.app/" },
        { id: 4, title: "Sport Mania", category: "react/next js", image: img4, description: "Sport Mania is a modern and clean sports management platform designed for users to easily explore and purchase tickets for various sporting events. With a sleek and user-friendly interface, the website simplifies the process of managing and booking sports tickets. The platform features detailed event pages, showcasing game information, teams, schedules, and seating options. Built to deliver an efficient ticketing experience, it’s the go-to place for sports fans.", projectLink:"https://sports-management-one.vercel.app/" },
        { id: 5, title: "Metacom Solution", category: "react/next js", image: img5, description: "The Metacom Solutions website is a beautifully designed platform that offers a wide range of tech-related courses. With a clean and modern layout featuring vector designs, this website provides users with an intuitive and seamless experience. Courses include web design and development, graphic design, digital marketing, and computer training. ", projectLink:"https://metacomsolution.com/" },
        { id: 6, title: "Woodworth Cabinetry", category: "react/next js", image: img6, description: "The Woodworth Cabinetry website is a modern and beautifully designed platform for showcasing high-quality wood doors, cabinetry, and tiles. With a focus on clean design and dynamic product presentation, the website allows users to explore a wide range of products effortlessly. Every product page is designed to highlight the craftsmanship and attention to detail, making it easy for customers to visualize how these pieces will fit into their spaces", projectLink:"https://woodworthcabinetry.com/" },
        
        { id: 7, title: "Evanto", category: "react/next js", image: img9, description: "Evanto is a full-stack event management platform where users can explore and purchase various event management programs. As a frontend developer and designer on this project, I focused on creating a clean, modern, and user-friendly interface that makes it easy for customers to browse through event services and book the right programs for their needs. The design is sleek and responsive, ensuring a smooth experience across all devices while maintaining a professional aesthetic.", projectLink:"https://evn-even-management.netlify.app/" },

        { id: 8, title: "RSM Event Management", category: "react/next js", image: img7, description: "RSM Event Management is a sleek, demo website designed to showcase a modern event and party management platform. Tailored for various occasions such as weddings, birthdays, concerts, and more, the platform is crafted to provide users with a seamless experience for browsing and booking event services. With a visually appealing and clean layout, the website makes it easy to explore event details, purchase tickets, and discover upcoming parties and gatherings", projectLink:"https://rsm-event-management.web.app/" },

        { id: 9, title: "Instaquirk", category: "react/next js", image: img10, description: "I worked on the InstaQuirk agency website, which features a modern and clean design that perfectly complements their wide range of digital services. The agency specializes in web design, SEO, social media management, and graphic design services. As the frontend designer, I focused on creating a visually appealing and easy-to-navigate platform that allows potential clients to explore the various services effortlessly. The design is sleek, professional, and optimized for an exceptional user experience.", projectLink:"https://instaquirk.netlify.app/"},

        { id: 10, title: "FlarexPort", category: "react/next js", image: img11, description: "Flarexport is an export company specializing in the sale of agricultural products such as Yellow Maize, Soybeans, Kidney Beans, Green Mung Beans, Sugarcane Jaggery, and Palm Oil Products. I worked on this project as a frontend developer, designing and building the entire platform from scratch using Next.js and Tailwind CSS. The website features a modern, responsive design that allows users to easily browse and learn about the various products offered, with a focus on clean visuals and smooth navigation.", projectLink:"https://flarexport.com/"},
        
        { id: 11, title: "IDEB-RTI", category: "react/next js", image: img13, description: "The IDEB-RTI website is a government initiative focused on showcasing their rich traditional history and success stories, while also highlighting their current activities. The website promotes various student clubs from diploma institutes aimed at encouraging tech and innovation among students. As the frontend developer and designer, I worked on creating a platform that blends modern design with an informative, engaging user experience, allowing visitors to explore the government’s past achievements, present projects, and future goals", projectLink:"https://rti.ideb.org.bd/"},
        
        { id: 12, title: "ETI.IDEB", category: "react/next js", image: img12, description: "The ETI.IDEB website is a government project developed to showcase various offline tech-related courses and their detailed information. The platform also highlights the history, present activities, and partnerships of IDEB’s technical education initiatives. Built using React and CSS, the website provides a user-friendly interface for visitors to explore course offerings, learn about past achievements, and discover IDEB’s contributions to tech education.", projectLink:"https://eti.ideb.org.bd/"},

        { id: 14, title: "INSIYA", category: "react/next js", image: img14, description: "The INSIYA website is a sleek eCommerce platform focused on product showcasing. Built using React, Astro, and Tailwind CSS, this website emphasizes a clean and modern interface for displaying products without an integrated shopping cart, focusing solely on presenting products in an attractive and engaging way. As the frontend developer, I designed a responsive, visually appealing layout that enhances the browsing experience for users, making it easy to explore the product range.", projectLink:"https://insiya.netlify.app/"},
      ];
      
  const [activeTab, setActiveTab] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 12)); // Show first 12 initially

  const filterProjects = (category) => {
    setActiveTab(category);
    if (category === "all") {
      setVisibleProjects(projects.slice(0, 12)); // Show only first 12
    } else {
      const filtered = projects.filter((project) => project.category === category);
      setVisibleProjects(filtered);
    }
  };

  return (
    <div className="projects-container">
    <div className="container">
    <div className="projects">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => filterProjects(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div layout className="parent">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div style={{position: 'relative'}}
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
            <a target="_blank" href={project.projectLink}>
            <div className="single-project" style={{background:`url(${project.image})`,height:"65vh",objectFit:"cover",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:'top center'}}>
                   <div className="content-item">
                   <h5>{project.title}</h5>
                   <p>{project.description}</p>
                   <a href={project.projectLink}>
                    <span>
                   <Lottie
                              animationData={arrowicon}
                              style={{ height: "60px", width: "60px" }}
                            /></span>
                   </a>
                   </div>
            </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div></div></div>
  );
};

export default Projects;
