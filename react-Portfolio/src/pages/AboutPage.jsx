import React from "react";
import AboutMe from "../assets/aboutImage.png"
function About() {
  return (
    <div className="container mt-5" >
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card shadow-lg bg-info">
        <div className="card-body text-center">
          <h2 className="mb-4">About Me</h2>
          <div>
          <img src={AboutMe} style={{width: 200}}/>
        </div>

          <blockquote className="blockquote text-center">
            <p className="mb-0">"He who conquers others is strong, but he who conquers himself is almighty."</p>
            <footer className="blockquote-footer mt-1">Lao Tsu</footer>
          </blockquote>
          
          <hr className="my-4"/>
          
      
          <p className="lead">
            A dedicated Army combat veteran and lifelong learner. I bring a resilient and adaptable mindset to everything I pursue.
          </p>
          <p className="lead">
            As a fast learner with a passion for full-stack development, I enjoy exploring the depths of technology and honing my skills to build impactful solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default About;
