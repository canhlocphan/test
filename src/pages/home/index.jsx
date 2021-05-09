import React from "react";

// mains
import BoxContent from "./mains/boxContent";
import BoxLeft from "./mains/boxLeft";
import BoxRight from "./mains/boxRight";

import "./styles.scss";

const Home = () => (
  <div className="home">
    <BoxContent />
    <div style={{ margin: "0 auto", width: "1190px", position: "relative" }}>
      <BoxLeft />
      <BoxRight />
    </div>
  </div>
);

export default Home;
