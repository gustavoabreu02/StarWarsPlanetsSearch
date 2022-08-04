import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Filters() {
  const [filterByNam, setFilterByName] = useState('');
  const [filterByColumn, setFilterByColumn] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filtersColunm, setFiltersColunm] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const { handleChange,
    filterPlanets, data, setFilter } = useContext(context);

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

  const removeFilter = ({ target }) => {
    const planets = data;
    const arrayDelet = filterByNumericValues
      .filter((filter) => filter.column !== target.name);
    setFilterByNumericValues(arrayDelet);
    if (arrayDelet.length === 0) {
      setFilter(data);
    } else {
      arrayDelet.forEach(({ column, comparison, value }) => {
        console.log('column', column);
        filterPlanets(column, comparison, value, planets);
      });
    }
  };

  const removeFilters = () => {
    setFilterByNumericValues([]);
    setFilter(data);
  };

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
          {
            filtersColunm.map((column, i) => <option key={ i }>{ column }</option>)
          }
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
          value={ valueFilter }
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
          const planets = data;
          setFiltersColunm(filtersColunm.filter((column) => column !== filterByColumn));
          const arrayFilters = [...filterByNumericValues, {
            column: filterByColumn,
            comparison: comparisonFilter,
            value: valueFilter,
          }];
          setFilterByNumericValues(arrayFilters);
          arrayFilters.forEach(({ column, comparison, value }) => {
            filterPlanets(column, comparison, value, planets);
          });
        } }
      >
        FILTRAR

      </button>
      { filterByNumericValues.map((filter, i) => (
        <span
          key={ i }
          data-testid="filter"
        >
          { `${filter.column} ${filter.comparison} ${filter.value} ` }
          <button
            name={ filter.column }
            onClick={ removeFilter }
            type="button"
            data-testid="button-remove-filters"
          >
            X

          </button>

        </span>
      )) }
      <button
        data-testid="button-remove-filters"
        onClick={ removeFilters }
        type="button"
      >
        Remove Filters

      </button>
    </div>
  );
}

export default Filters;
