import React from "react";
import GreenBox from "../components/container/GreenBox";
import RedBox from "../components/container/RedBox";
import { Parallax } from "react-parallax";
import backcnx from "../backcnx.jpg";

const inlineStyle = {
  background: "white",
  left: "50%",
  top: "50%",
  position: "absolute",
};

const Home = () => {
  return (
    <>
      <Parallax bgImage={backcnx}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Ainda a pensar no que escrever aqui </div>
        </div>
      </Parallax>
      <GreenBox />
      <RedBox />
    </>
  );
};

export default Home;
