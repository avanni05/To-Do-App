import React from 'react';

const Filterbar = ({ filter, setFilter }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Filterbar;
