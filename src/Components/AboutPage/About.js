import React from "react";
import "./About.css";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
function About() {
  return (
    <React.Fragment>
      <div className="About" id="about">
        <div className="about_container">
          <div className="heading">
            <h3 className="about_heading">About</h3>
          </div>
          <div className="card_holder">
            <div className="card"></div>
            <div className="card">
              <div className="headingcard">Skills</div>
              {/* <div className="text-container"> */}
              {/* <div className="text-items">
                  <div className="skill1">Html</div>
                </div>
                <div className="text-items">
                  <div className="skill2">CSS</div>
                </div>
                <div className="text-items">
                  <div className="skill3">JavaScript</div>
                </div>
                <div className="text-items">
                  <div className="skill4">Android</div>
                </div>
                <div className="text-items">
                  <div className="skill5">Reactjs</div>
                </div>
                <div className="text-items">
                  <div className="skill6">java</div>
                </div> */}
              {/* </div> */}
            </div>
            <div className="card"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
