import React from "react";
import ShowcaseComponent from "../components/ShowcaseComponent";
import Navbar from "../components/Navbar";
import ShowcaseNew from "../components/ShowcaseNew";
const Showcase = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <ShowcaseNew />
      {/* <ShowcaseComponent /> */}
    </div>
  );
};

export default Showcase;
