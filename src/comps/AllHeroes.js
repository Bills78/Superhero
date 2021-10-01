import React, { useState, useEffect } from "react";

function AllHeroes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setHeroes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <ul>
      {heroes.map(hero => (
        <li key={hero.id}>
            {hero.name}
        </li>
      ))}
    </ul>
  );
}};

export default AllHeroes;