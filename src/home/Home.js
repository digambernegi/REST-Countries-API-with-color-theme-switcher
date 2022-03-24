import React, { useContext } from "react";
import "./home.css";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import { ThemeContext } from "../context/darkModeContext";
import Card from "../components/card/Card.jsx";

function Home({getDataBySearch,input,setInput, data, filterRegion, setFilterRegion }) {
  const { darkMode } = useContext(ThemeContext);

  const CountryInfo = data?.map((card) => {
    return (
      <Card
        key={card.aplha2Code}
        img={card.flags.svg}
        title={
          card.altSpellings[2] ? card.altSpellings[2] : card.altSpellings[1]
        }
        population={card.population}
        region={card.region}
        capital={card.capital}
      />
    );
  });

  return (
    <>
      <div className={darkMode ? "nav dark" : "nav"}>
        <Header />
      </div>
      <div className={darkMode ? "input dark" : "input"}>
        <Form getDataBySearch={getDataBySearch} input={input} setInput={setInput} filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
      </div>
      <div className={darkMode ? "home dark" : "home"}>{CountryInfo}</div>
    </>
  );
}

export default Home;
