import React, { useContext, useState } from 'react';
import context from '../context/MyContext';
import Filters from './Filters';

function Table() {
  const { filter, filterByName } = useContext(context);
  const [order, setOrder] = useState('Ascendente');
  const [orderBool, setOrderBool] = useState(false);
  const [columnOrder, setColumnOrder] = useState('population');
  const filtersColunm = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const handleClick = () => {
    setOrderBool(true);
  };

  const ab = () => {
    if (orderBool) {
      return (
        order === 'Ascendente' ? (
          filter.sort((a, b) => a[columnOrder] - b[columnOrder])
            .filter((planet) => planet.name.includes(filterByName))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films.map((film) => film) }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url}</td>
              </tr>
            ))
        ) : (
          filter.sort((a, b) => {
            const number = -1;
            if (b[columnOrder] === 'unknown') {
              return number;
            }
            return b[columnOrder] - a[columnOrder];
          })
            .filter((planet) => planet.name.includes(filterByName))
            .map((plane) => (
              <tr key={ plane.name }>
                <td data-testid="planet-name">{ plane.name }</td>
                <td>{ plane.rotation_period }</td>
                <td>{ plane.orbital_period }</td>
                <td>{ plane.diameter }</td>
                <td>{ plane.climate }</td>
                <td>{ plane.gravity }</td>
                <td>{ plane.terrain }</td>
                <td>{ plane.surface_water }</td>
                <td>{ plane.population }</td>
                <td>{ plane.films.map((film) => film) }</td>
                <td>{ plane.created }</td>
                <td>{ plane.edited }</td>
                <td>{ plane.url}</td>
              </tr>
            ))
        )
      );
    }
    return (
      filter.sort((a, b) => {
        const number = -1;
        const x = a.name.toUpperCase();
        const y = b.name.toUpperCase();
        return x > y ? 1 : number;
      })
        .filter((planet) => planet.name.includes(filterByName))
        .map((plane) => (
          <tr key={ plane.name }>
            <td data-testid="planet-name">{ plane.name }</td>
            <td>{ plane.rotation_period }</td>
            <td>{ plane.orbital_period }</td>
            <td>{ plane.diameter }</td>
            <td>{ plane.climate }</td>
            <td>{ plane.gravity }</td>
            <td>{ plane.terrain }</td>
            <td>{ plane.surface_water }</td>
            <td>{ plane.population }</td>
            <td>{ plane.films.map((film) => film) }</td>
            <td>{ plane.created }</td>
            <td>{ plane.edited }</td>
            <td>{ plane.url}</td>
          </tr>
        ))
    );
  };

  return (
    <div>
      <Filters />
      <form>
        <select
          onChange={ ({ target }) => {
            setColumnOrder(target.options[target.options.selectedIndex].text);
          } }
          data-testid="column-sort"
          name="filterByColumn"
        >
          {
            filtersColunm.map((column, i) => <option key={ i }>{ column }</option>)
          }
        </select>
        <label htmlFor="Ascendente">
          Ascendente
          <input
            data-testid="column-sort-input-asc"
            value="ASC"
            id="Ascendente"
            type="radio"
            name="orderFilter"
            onClick={ () => setOrder('Ascendente') }
          />

        </label>
        <label htmlFor="Descendente">
          Descendente
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            id="Descendente"
            name="orderFilter"
            onClick={ () => setOrder('Descendente') }
          />

        </label>
        <button
          data-testid="column-sort-button"
          onClick={ handleClick }
          type="button"
        >
          ORDENAR

        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { ab() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
