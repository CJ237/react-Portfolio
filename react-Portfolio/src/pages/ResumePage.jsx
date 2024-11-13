import Res from '../assets/Resume.pdf';

export default function ResumePage() {
    return (
      
<div className="container mt-5">
  <h2 className="text-center mb-4">Resume</h2>
  
  
  <div className="row">
   
    <div className="col-md-6 mt-3 ">
      <h4>Frontend Languages & Libraries</h4>
      <ul className="list-group shadow-lg">
        <li className="list-group-item bg-info">React.js</li>
        <li className="list-group-item bg-info">JavaScript</li>
        <li className="list-group-item bg-info">HTML</li>
        <li className="list-group-item bg-info">CSS</li>
        <li className="list-group-item bg-info">Bootstrap</li>
        <li className="list-group-item bg-info">Handlebars</li>
      </ul>
    </div>

   
    <div className="col-md-6 mt-3">
      <h4>Backend Dependencies & Technologies</h4>
      <ul className="list-group shadow-lg ">
        <li className="list-group-item bg-info">Express</li>
        <li className="list-group-item bg-info">Apollo Client</li>
        <li className="list-group-item bg-info">Apollo Server</li>
        <li className="list-group-item bg-info">PostgreSQL</li>
        <li className="list-group-item bg-info">Sequelize</li>
        <li className="list-group-item bg-info">MongoDB</li>
        <li className="list-group-item bg-info">Mongoose</li>
        <li className="list-group-item bg-info">GraphQL</li>
      </ul>
    </div>
  </div>

  <div className="text-center mt-4 ">
    <a href={Res} className="btn btn-primary shadow-lg" download="Resume.pdf">Download Resume</a>
  </div>
</div>
    );
  }