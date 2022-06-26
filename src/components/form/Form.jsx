import React,{useState} from "react";
import "./from.css";

function Form({getDataBySearch,setInput,input,filterRegion,setFilterRegion }) {

console.log(input)

  return (
    <div className="searchCategory">
      <div className="Input">
        <i onClick={getDataBySearch} className="fa fa-search" aria-hidden="true"></i>{" "}
        <input onChange={(e) => setInput(e.target.value)} value={input.value} type="text" placeholder="Search for a country.." />
      </div>
      <div className="dropdown">
        <select name="selectList" id="selectList"
        value={filterRegion}
        onChange={(e) => setFilterRegion(e.target.value)}
        className="byType"
        >
          {/* <option value="All" selected>All</option> */}
          <option value="none"disabled hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
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
