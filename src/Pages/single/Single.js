import React from "react";
import Header from "../../components/header/Header.jsx";
import NavigateButton from "../../components/button/NavigateButton.jsx";
import "./single.css";
import { useParams } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

function Single() {
  const { id } = useParams();
  const { data } = useStateContext();

  const filter = data.filter((item) => item.flag === id);
  const cur=filter.map((item)=> item.currencies.EUR.name)
  console.log(cur);

  // const lang = filter.languages.map((item) => item);
  // console.log(filter.languages)
  return (
    <>
      <div className="single_header">
        <Header />
        {filter.map((item) => (
          <div className="single_header">
            <NavigateButton />
            <div className="single_body">
              <div className="flagImg">
                <img src={item.flags.svg} alt="flag" />
              </div>
              <div className="flagInfo">
                <div className="flagTitle">
                  <h1>{item.name.common}</h1>
                </div>

                <div className="flagSubInfo">
                  <p>
                    Native Name: <span>{item.altSpellings[1]}</span>
                  </p>
                  <p>
                    Population: <span>{item.population}</span>
                  </p>
                  <p>
                    Region: <span>{item.continents}</span>
                  </p>
                  <p>
                    Sub Region: <span>{item.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{item.capital}</span>
                  </p>

                  <p>
                    Top Level Domain: <span>{item.tld[0]}</span>
                  </p>
                  <p>
                    Currencies: <span>{cur}</span>
                  </p>
                  <p>
                    Language: <span>s</span>
                  </p>
                </div>

                <div className="border">
                  <p>
                    Border Countries: <span>{item.borders}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Single;
