import Weather from './Weather'

const CountryDetail = ({ country }) => {
  const capital = country.capital ? country.capital[0] : null
  const languages = country.languages ? Object.values(country.languages) : []

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {capital || 'N/A'}</p>
      <p>area {country.area}</p>

      <h3>languages:</h3>
      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={country.flags.png || country.flags.svg}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        width="150"
      />

      {capital && <Weather capital={capital} />}
    </div>
  )
}

export default CountryDetail
