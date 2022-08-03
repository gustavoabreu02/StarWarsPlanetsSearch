import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByColumn, setFilterByColumn] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');

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

  function filterPlanets(column, comparison, value) {
    if (comparison === 'maior que') {
      setFilter(data.filter((planet) => Number(planet[column]) > Number(value)));
    }
    if (comparison === 'menor que') {
      setFilter(data.filter((planet) => Number(planet[column]) < Number(value)));
    }
    if (comparison === 'igual a') {
      setFilter(data.filter((planet) => planet[column] === value));
    }
  }

  return (
    <context.Provider
      value={ { filter,
        filterPlanets,
        handleChange,
        filterByName,
        filterByNumericValues: [
          {
            column: filterByColumn,
            comparison: comparisonFilter,
            value: valueFilter,
          },
        ],
        setFilterByColumn,
        setComparisonFilter,
        setValueFilter } }
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
