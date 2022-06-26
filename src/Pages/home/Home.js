import React, { useContext } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Form from "../../components/form/Form";
import { ThemeContext } from "../../context/darkModeContext";
import Card from "../../components/card/Card.jsx";
import { useStateContext } from "../../context/ContextProvider";

function Home() {
  const { darkMode } = useContext(ThemeContext);
  const { region, setRegion, data, setData, input, setInput, getDataBySearch } =
    useStateContext();


    const CountryInfo = data?.map((card,index) => {
    return (
      <Card
        id={card.flag}
        code={card.alpha2Code}
        key={index}
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
        <Form
          getDataBySearch={getDataBySearch}
          input={input}
          setInput={setInput}
        />
      </div>
      <div className={darkMode ? "home dark" : "home"}>{CountryInfo}</div>
    </>
  );
}

export default Home;
