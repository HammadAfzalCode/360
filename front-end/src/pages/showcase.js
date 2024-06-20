import React from "react";
import ShowcaseComponent from "../components/ShowcaseComponent";
import Navbar from "../components/Navbar";
import ShowcaseNew from "../components/ShowcaseNew";
import ShowcaseRed from "../components/ShowcaseRed";
const Showcase = () => {
  return (
    <div>
      <Navbar />
      {/* <ShowcaseNew /> */}
      <ShowcaseRed />
      
    </div>
  );
};

export default Showcase;
