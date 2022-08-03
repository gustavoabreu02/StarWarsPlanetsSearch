import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Filters() {
  const { handleChange,
    filterPlanets,
    setFilterByColumn,
    setComparisonFilter, setValueFilter, filterByNumericValues } = useContext(context);
  const [filterByNam, setFilterByName] = useState('');

  const handleClick = ({ target }) => {
    if (target.name === 'filterByColumn') {
      setFilterByColumn(target.options[target.options.selectedIndex].text);
    }
    if (target.name === 'comparisonFilter') {
      setComparisonFilter(target.options[target.options.selectedIndex].text);
    }
    if (target.name === 'valueFilter') {
      setValueFilter(target.value);
    }
  };
  const { column, comparison, value } = filterByNumericValues[0];

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ filterByNam }
        onChange={ (e) => {
          setFilterByName(e.target.value);
          handleChange(e.target.value);
        } }
      />
      <form>
        <select
          onChange={ handleClick }
          data-testid="column-filter"
          name="filterByColumn"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          onChange={ handleClick }
          data-testid="comparison-filter"
          name="comparisonFilter"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          value={ value }
          type="number"
          onChange={ handleClick }
          name="valueFilter"
          data-testid="value-filter"
        />
      </form>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          filterPlanets(column, comparison, value);
        } }
      >
        FILTRAR

      </button>
    </div>
  );
}

export default Filters;
