import React, { useContext } from "react";
import "./home.css";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import { ThemeContext } from "../context/darkModeContext";

function Home({data, filterRegion, setFilterRegion}) {
  const { darkMode,region,setRegion } = useContext(ThemeContext);

  const CountryInfo = data?.map((card) => (
    
    <div className="boxWrapper" key={card.aplha2Code}>
      <img src={card.flags.svg} alt="countryflag" />
      <div className="flagInfo">
        <h1 className="flagTitle">{card.altSpellings[2]? (card.altSpellings[2]):(card.altSpellings[1])}</h1>
        <p className="population">
          Population: <span>{card.population}</span>
        </p>
        <p className="region">
          Region: <span>{card.region}</span>
        </p>
        <p className="capital">
          Captial: <span>{card.capital}</span>
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <div className={darkMode ? "nav dark" : "nav"}>
        <Header />
      </div>
      <div className={darkMode ? "input dark" : "input"}>
        <Form filterRegion={filterRegion} setFilterRegion={setFilterRegion}/>
      </div>
      <div className={darkMode ? "home dark" : "home"}>{CountryInfo}</div>
    </>
  );
}

export default Home;
