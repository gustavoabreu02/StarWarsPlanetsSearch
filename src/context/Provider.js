import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    const ApiPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const promise = await fetch(url);
      const response = await promise.json();
      response.results.forEach((oneColumn) => delete oneColumn.residents);
      setData(response.results);
      setFilter(response.results);
    };
    ApiPlanets();
  }, []);

  function handleChange(value) {
    setFilterByName(value);
  }

  function filterPlanets(column, comparison, value, planets) {
    if (comparison === 'maior que') {
      setFilter(planets.filter((planet) => Number(planet[column]) > Number(value)));
    }
    if (comparison === 'menor que') {
      setFilter(planets.filter((planet) => Number(planet[column]) < Number(value)));
    }
    if (comparison === 'igual a') {
      setFilter(planets.filter((planet) => planet[column] === value));
    }
  }

  return (
    <context.Provider
      value={ { filter,
        setFilter,
        data,
        filterPlanets,
        handleChange,
        filterByName } }
    >
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
