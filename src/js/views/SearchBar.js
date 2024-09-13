import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 2) {
        const peopleResults = store.people.filter(person => person.properties.name.toLowerCase().includes(query.toLowerCase()));
        const planetsResults = store.planets.filter(planet => planet.properties.name.toLowerCase().includes(query.toLowerCase()));
        const vehiclesResults = store.vehicles.filter(vehicle => vehicle.properties.name.toLowerCase().includes(query.toLowerCase()));
        setResults([...peopleResults, ...planetsResults, ...vehiclesResults]);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="dropdown w-50">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search..."
          className="form-control dropdown-toggle"
          id="dropdownMenuButton"
          aria-expanded={focused}
        />
        {focused && results.length > 0 && (
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {results.map(result => (
              <li key={result.uid}>
                <button className="dropdown-item">
                  {result.properties.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;