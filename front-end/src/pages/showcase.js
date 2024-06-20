import React from "react";
// import ShowcaseComponent from "../components/ShowcaseComponent";
import Navbar from "../components/Navbar";
// import ShowcaseNew from "../components/ShowcaseNew";
import ShowcaseRed from "../components/ShowcaseRed";
import BasicGrid from "../components/ShowcaseRed";
import ShowcaseGrid from "../components/ShowcaseGrid";
const Showcase = () => {
  return (
    <div>
      <Navbar />

      {/* <ShowcaseRed /> */}
      <ShowcaseGrid />
    </div>
  );
};

export default Showcase;
