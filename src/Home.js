import React from "react";
import Heroes from "./comps/Heroes";

function Home() {
  return (
    <div className='home'>
      <div className="stan-lee">
        <p>“With great power, comes great responsibility.” <br></br>
        <b>― Stan Lee</b></p>
        </div>
      <Heroes />
    </div>
  );
};

export default Home;