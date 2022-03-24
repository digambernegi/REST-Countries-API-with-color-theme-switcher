import React from "react";
import Header from "../components/header/Header.jsx";
import NavigateButton from '../components/button/NavigateButton.jsx';
import './single.css'


function Single({data}) {
  console.log(data)
  return (
    <>
    <div className="single_header">
    <Header />
    <div className="single_header">
    <NavigateButton />
    <div className="single_body">
      
    <div className="flagImg">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" alt="flag" />
    </div>
    <div className="flagInfo">
    <div className="flagTitle"><h1>Belgium</h1></div>
    
    <div className="flagSubInfo">
    <p>Native Name: <span>Belge</span></p>
    <p>Population: <span>11.319.511</span></p>  
    <p>Region: <span>Europe</span></p>  
    <p>Sub Region: <span>Western Europe</span></p>  
    <p>Capital: <span>Brussels</span></p>

    <p>Top Level Domain: <span>.be</span></p>  
    <p>Currencies: <span>Euro</span></p>  
    <p>Language: <span>Dutch, French, German</span></p>  
    </div>

    <div className="border">
    <p>Border Countries: <span>France</span>
    <span>Germany</span>
    <span>Netherlands</span></p>   
    </div>

    </div>

    </div>
    </div>
    </div>
    </>
  );
}

export default Single;
