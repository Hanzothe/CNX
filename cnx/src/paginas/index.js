import React from "react";
import GreenBox from "../components/container/GreenBox";
import RedBox from "../components/container/RedBox";
import { Parallax } from "react-parallax";
import backcnx from "../backcnx.jpg";
import "../global.css";

const Home = () => {
  return (
    <>
      <Parallax bgImage={backcnx}>
        <div style={{ height: 500 }}>
          <h1 class="text-3xl font-bold underline text-white">Hello world!</h1>
        </div>
      </Parallax>
      <GreenBox />
      <RedBox />
    </>
  );
};

export default Home;
