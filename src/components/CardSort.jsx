import { useEffect, useState } from "react";

const CardSort = ({ setSort }) => {
  

  return (
    <div id="sort">
      <label htmlFor="card-sort">Sort By:</label>
      <select className="card-sort" onChange={(e) => setSort((currentSort) =>{ return {...currentSort, sort_by: e.target.value}})}>
        <option value="created_at">date</option>
        <option value="comment_count">comment count</option>
        <option value="votes">votes</option>
      </select>
      <select className="card-sort" onChange={(e) => setSort((currentSort) =>{ return {...currentSort, order: e.target.value}})}>
        <option value="desc">&#8595; descending</option>
        <option value="asc">&#8593; ascending</option>
      </select>
    </div>
  );
};

export default CardSort;
