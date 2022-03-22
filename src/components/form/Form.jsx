import React from "react";
import "./from.css";
import axios from "axios";

function Form({ getData,filterRegion,setFilterRegion }) {
  console.log(filterRegion)



  return (
    <div className="searchCategory">
      <div className="Input">
        <i onClick={getData} className="fa fa-search" aria-hidden="true"></i>{" "}
        <input type="text" placeholder="Search for a country.." />
      </div>
      <div className="dropdown">
        <select name="selectList" id="selectList"
        value={filterRegion}
        onChange={(e) => setFilterRegion(e.target.value)}
        ClassName="byType"
        >
            <option>Filter by Region</option>
          {/* <option value="All" selected>All</option> */}
          <option value="Africa" selected>Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        
        </select>
      </div>
    </div>
  );
}

export default Form;
