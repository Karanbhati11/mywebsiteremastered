import React, { useEffect, useRef } from "react";
import "./Home.css";
// import { HashLink } from "react-router-hash-link";
import { init } from "ityped";
// import About from "../AboutPage/About";
function Home() {
  const textref = useRef();
  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1000,
      loop: true,
      strings: ["Developer", "Designer", "Gamer"],
    });
  }, []);

  return (
    <React.Fragment>
      <div className="homecontainer" id="home">
        <div className="home_container">
          <div className="heading_home"></div>
          <div className="home_content">
            <h2 className="Hello" style={{ margin: "0px" }}>
              Hello There
            </h2>
            <h1 className="Hello2" style={{ margin: "0px" }}>
              I am <span style={{ color: "white" }}>Karan</span>
            </h1>
            <h3 className="Hello3">
              I am a <span style={{ color: "white" }} ref={textref}></span>
            </h3>
            <button className="scroll_down"></button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
