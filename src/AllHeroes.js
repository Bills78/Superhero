import React from "react";
import Heroes from "./comps/Heroes";

function AllHeroes() {
  return (
    <div className="heroes-list">
      <h2>All Heroes</h2>
      <Heroes />
    </div>
  )
}

export default AllHeroes;