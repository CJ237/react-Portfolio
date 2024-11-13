import React from 'react';
import Jate from '../assets/JATE.png';
import Tech from '../assets/Techblog.png';
import Retro from '../assets/RetroNet.png';
import Blog from '../assets/personalBlog.png';
import Weather from '../assets/weatherApp.png';
import Note from '../assets/noteTaker.png';

function Projects() {

  return (
    <section>
  
    <div class="container mt-5">
    <h2 class="text-center mb-4">My Projects</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  
      
      <div className="col">
        <div className="card h-100 shadow-lg bg-info">
          <div className="card-body">
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">Just Another Text Editor</p>
            <div>
              <img src={Jate} style={{width: 330}}/>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <a href="https://github.com/CJ237/pwaJATE19" className="btn btn-outline-dark btn-sm" target="_blank">GitHub</a>
            <a href="https://pwajate19.onrender.com" className="btn btn-outline-primary btn-sm" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
  
      
      <div className="col">
        <div className="card h-100 shadow-lg bg-info">
          <div className="card-body">
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">MVC Tech blog</p>
            <div>
              <img src={Tech} style={{width: 330}}/>
            </div>
          </div>
         
          <div className="card-footer d-flex justify-content-between">
            <a href="https://github.com/CJ237/mvc_Tech_Blog" className="btn btn-outline-dark btn-sm" target="_blank">GitHub</a>
            <a href="https://the-tech-blog-l7vp.onrender.com/" className="btn btn-outline-primary btn-sm" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
  
      
      <div className="col">
        <div className="card h-100 shadow-lg bg-info">
          <div className="card-body">
            <h5 className="card-title">Project 3</h5>
            <p className="card-text">5-Day Forecast</p>
            <div>
              <img src={Weather} style={{width: 330}}/>
            </div>
          </div>
         
          <div className="card-footer d-flex justify-content-between">
            <a href="https://github.com/CJ237/Weather-App" className="btn btn-outline-dark btn-sm" target="_blank">GitHub</a>
            <a href="https://cj237.github.io/Weather-App/" className="btn btn-outline-primary btn-sm" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
  
      
      <div className="col">
        <div className="card h-100 shadow-lg bg-info">
          <div className="card-body">
            <h5 className="card-title">Project 4</h5>
            <p className="card-text">DoorDash blog</p>
            <div>
              <img src={Blog} style={{width: 330}}/>
            </div>
          </div>
          
          <div className="card-footer d-flex justify-content-between">
            <a href="https://github.com/CJ237/personal-blog" className="btn btn-outline-dark btn-sm" target="_blank">GitHub</a>
            <a href="https://cj237.github.io/personal-blog/" className="btn btn-outline-primary btn-sm" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
  
      
      <div className="col">
        <div className="card h-100 shadow-lg bg-info">
          <div className="card-body">
            <h5 className="card-title">Project 5</h5>
            <p className="card-text">Note Taker</p>
            <div>
              <img src={Note} style={{width: 330}}/>
            </div>
          </div>
          
          <div className="card-footer d-flex justify-content-between">
            <a href="https://github.com/CJ237/Note_Taker" className="btn btn-outline-dark btn-sm" target="_blank">GitHub</a>
            <a href="https://note-taker-gtav.onrender.com" className="btn btn-outline-primary btn-sm" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
  
      
      <div className="col">
        <div className="card h-100 shadow-lg bg-info">
          <div className="card-body">
            <h5 className="card-title">Project 6</h5>
            <p className="card-text">Retro Net</p>
            <div>
              <img src={Retro} style={{width: 330, height: 200}}/>
            </div>
          </div>
          
          <div className="card-footer d-flex justify-content-between">
            <a href="https://github.com/treytaylersmith/Retro-Net" className="btn btn-outline-dark btn-sm" target="_blank">GitHub</a>
            <a href="https://retro-net.onrender.com/" className="btn btn-outline-primary btn-sm" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
  
    </div>
  </div>
  </section>
  );
}

export default Projects;