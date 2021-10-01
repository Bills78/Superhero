import Hero from "./Hero";

function HeroSearch(props) {
  const { handleSubmit, searchValue, handleSearch, heroes, searchTerm } = props

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
              handleSearch(e)
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
  )
}

export default HeroSearch;