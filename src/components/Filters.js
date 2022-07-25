import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Filters() {
  const [filterByNam, setFilterByName] = useState('');
  const { handleChange, filterByName } = useContext(context);
  console.log(filterByName);
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
    </div>
  );
}

export default Filters;
