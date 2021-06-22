import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import teach from "../../assets/teach.jpg";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
       
         <a className="apply"  href="https://docs.google.com/forms/d/e/1FAIpQLSfeIiOBJv2Uim2MG8Q2d4iVz5bp4xm9Jtz9pvbXuL9AlAVdhw/viewform" >
          Apply Now
        </a> 
         
      
        <span> <button className="btn1">Download JD</button></span> 
      
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div>
      <div>
        <h1 className="h1">We Want you!</h1>
        <h2 className="h2">
          Keen on teaching kids? Have a penchant for making the young ones
          build? If you want to change how kids aged 5-15 are taught
          extra-curriculars, join us at Spark Studio.
        </h2>
        <form>
          <button
            className="btn3"
            formaction="https://docs.google.com/forms/d/e/1FAIpQLSfeIiOBJv2Uim2MG8Q2d4iVz5bp4xm9Jtz9pvbXuL9AlAVdhw/viewform"
          >
            Apply Now
          </button>
        </form>
        <br />
        <img className="image" src={teach} alt="logo" />
        <h3 className="h3">Open Positions</h3>
        <h4 className="h4">
          Add your details, share your resume & let us know which courses you
          are best suited for.
        </h4>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Card
            title="Communications"
            description="Storytelling, Dramatic Storytelling, Debate, Public Speaking"
            link="https://docs.google.com/forms/d/e/1FAIpQLSfeIiOBJv2Uim2MG8Q2d4iVz5bp4xm9Jtz9pvbXuL9AlAVdhw/viewform"
          />
        </div>
        <div className="col-sm-4">
          <Card
            title="Music"
            description="Guitar, Western Vocals "
            link="https://docs.google.com/forms/d/e/1FAIpQLSfeIiOBJv2Uim2MG8Q2d4iVz5bp4xm9Jtz9pvbXuL9AlAVdhw/viewform"
          />
        </div>
        <div className="col-sm-4">
          <Card
            title="Visual Arts"
            description="Photography, Stop motion animation, Art.s"
            link="https://docs.google.com/forms/d/e/1FAIpQLSfeIiOBJv2Uim2MG8Q2d4iVz5bp4xm9Jtz9pvbXuL9AlAVdhw/viewform"
          />
        </div>
      </div>
      <h5 className="h5">Excited to have you teach our children!</h5>
    </div>
  );
}

export default CardList;
