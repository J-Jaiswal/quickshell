import React from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ sortOption, setSortOption, onSort }) => {
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    onSort(selectedOption);
  };

  return (
    <div className="dropdown">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortOption} onChange={handleSortChange}>
        <option value="">None</option>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default Dropdown;
