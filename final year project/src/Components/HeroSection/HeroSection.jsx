import React from 'react';
import image from '../../assets/image 1.png'; 
import image2 from '../../assets/image 2.png'; 
import image3 from '../../assets/image 3.png'; 
import image4 from '../../assets/image 4.png'; 
import image5 from '../../assets/image 5.png'; 
import image6 from '../../assets/image 6.png'; 

import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <>
      <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Empowering Young Minds to Code the Future</h1>
          <div className="hero-subtitle mt-4">
            <h5>Empowering kids to become tech creators through fun, interactive coding lessons. Building problem-solving skills, creativity, and confidence to shape the tech leaders of tomorrow!</h5>
          </div>
          <button type="button" className="btn px-3 py-2 btn-dark text-white fw-bold mt-5">Get Started</button>
        </div>
      </div>
      <div className="why-learn-section">
        <div>
          <p className="why-learn-title">Why Learn to Code</p>
          <h2 className="why-learn-description">Coding is like a superpower. It boosts creativity, problem-solving, and lets you build cool projects!</h2>
        </div>
        <div className="container mt-5">
        <div className="row mx-auto">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <span >
              <img src={image2} alt="Image 2" className="img-fluid " />
              <span className='mx-3'>Fun Learning (Coding for Kids)</span>
              <p className='mx-5'>Coding becomes enjoyable with interactive lessons, games, and projects designed specifically for kids. It encourages hands-on learning and creative thinking.</p>
            </span>
            <span >
              <img src={image2} alt="Image 2" className="img-fluid " />
              <span className='ms-3'>Problem-Solving Skills (Critical Thinking)</span>
              <p className='mx-5'>Coding teaches kids to break down complex tasks into simple steps, helping them develop logical reasoning and analytical skills essential for real-world challenges.</p>
            </span>
            <span>
              <img src={image2} alt="Image 2" className="img-fluid " />
              <span className='mx-3'>Future-Ready Skills (Digital Literacy)</span>
              <p className='mx-5'>Learning to code prepares kids for future careers in technology and innovation, giving them the skills to thrive in an ever-evolving digital world.</p>
            </span>
          </div>
          <div  className="col-lg-6 col-md-6 col-sm-12 mx-auto">
          <img src={image3} alt="Image 3" className="img-fluid h-75 mx-5" />
          </div>
        </div>
      </div>
      </div>
      <div className='pt-4' style={{ backgroundColor: "#171728" }}> 
        <div >
            <h4 className='text-white text-center' >Courses We Offer</h4>
        </div>
        <div className='container'>
            <div  className='row mx-auto'>
             <div className='col-lg-4 col-md-4 col-sm-12' >
                <div className='card mt-5' style={{ backgroundColor: "#d4d4f1", borderRadius: "10px" }}>
                    <img src={image6} alt="Image 6" className="img-fluid h-50 w-50 d-block mx-auto mt-5" />
                    <h5 className='text-center mt-3'>Get Started with HTML</h5>
                    <p className='text-center mx-auto'>Discover the foundation of web development with HTML! Learn to structure your pages with headings, paragraphs, lists, and images. Start building websites from scratch and bring your ideas to life</p>
                </div>
             </div>
             <div className='col-lg-4 col-md-4 col-sm-12' >
                <div className='card mt-5' style={{ backgroundColor: "#d4d4f1", borderRadius: "10px" }}>
                    <img src={image4} alt="Image 4" className="img-fluid h-50 w-50 d-block mx-auto mt-5" />
                    <h5 className='text-center mt-3'>Style Your Web Pages with CSS</h5>
                    <p className='text-center mx-auto'>Unlock the power of CSS to add colors, fonts, and layouts to your websites! Learn to make your pages visually appealing with responsive designs and animations. Transform basic HTML into stunning web experiences!</p>
                </div>
             </div>
             <div className='col-lg-4 col-md-4 col-sm-12' >
                <div className='card mt-5' style={{ backgroundColor: "#d4d4f1", borderRadius: "10px" }}>
                    <img src={image5} alt="Image 5" className="img-fluid h-50 w-50 d-block mx-auto mt-5" />
                    <h5 className='text-center mt-3'>Interactive JavaScript</h5>
                    <p className='text-center mx-auto'>Add interactivity and functionality to your websites with JavaScript! Learn to create dynamic elements, handle user actions, and build engaging apps. Turn your ideas into interactive web projects!</p>
                </div>
             </div>
            </div>
        </div>
      </div>
    
    </>
  );
};

export default HeroSection;