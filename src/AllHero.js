import React from "react";
import AllHeroes from "./comps/AllHeroes";

function AllHero() {
  return (
    <div className='home'>
      <h2>Search a super on the home page to see thier stats.</h2>
      <AllHeroes />
    </div>
  );
};

export default AllHero;