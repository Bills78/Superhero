import React, { useState, useEffect } from "react";
import Hero from "./Hero";

function Heroes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue('')
  }

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
      )
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Search for a Super:
            <input 
              type="text"
              placeholder="e.g. Hulk"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setSearchTerm(e.target.value)
                }}
              required
            />
            <button type="submit">Search</button>
          </label>
        </form>
        <Hero 
          heroes={heroes}
          searchTerm={searchTerm}
        />
      </div>
    );
  }
}

export default Heroes;