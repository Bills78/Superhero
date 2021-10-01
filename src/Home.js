import React from "react";
import Heroes from "./comps/Heroes";

function Home() {
  return (
    <div className='home'>
      <h2>“With great power, comes great responsibility.”<br></br>
      ― Stan Lee</h2>
      <Heroes />
    </div>
  )
}

export default Home;