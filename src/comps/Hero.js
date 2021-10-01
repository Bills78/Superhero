import uniqid from "uniqid"

function Hero(props) {
  const { heroes, searchTerm } = props

  const _capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const _showDetails = (obj, statName) => {
    return (
      <div className="stats">
        <h3>{_capitalize(statName)}:</h3>
        <ul>
          {Object.entries(obj).map(entry => (
          <li key={uniqid()}>{`${entry[0]} - ${entry[1]}`}</li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div>
      {heroes.filter(function(hero) {
        return hero.name.toLowerCase().split('-').join('') === searchTerm.toLowerCase().split('-').join('')
      })
      .map(function(hero) {
        return (
          <div className="hero" key={hero.id}>
            <div id="hero-image-div"><img className="hero-image" src={hero.images.sm} alt="hero"></img></div>
            <h2 id="hero-name">{hero.name}</h2>
            <div id="all-stats">
              {_showDetails(hero.powerstats, 'powerstats')}
              {_showDetails(hero.appearance, 'appearance')}
              {_showDetails(hero.biography, 'biography')}
              {_showDetails(hero.work,'work')}
              {_showDetails(hero.connections, 'connections')}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Hero;