import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((dat) => dat.json())
      .then((response) => response.results)
      .then((responseFinal) => setData(responseFinal));
  }, []);

  console.log(data);
  function handleChange(value) {
    setFilterByName(value);
  }

  return (
    <context.Provider value={ { data, handleChange, filterByName } }>
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
