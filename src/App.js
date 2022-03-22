import React, { useContext, useEffect, useState } from "react";
import Home from "./home/Home";
import "./app.css";
import axios from "axios";

// 'https://restcountries.com/v3.1/all'
function App() {
  const [data,setData]=useState([]);
  const[region,setRegion]=useState('Africa')

  useEffect(() => {
    async function getData(){

      const res= await  axios.get(`https://restcountries.com/v3.1/region/${region}`)
     console.log(res.data)
    setData(res.data)
     }
      getData();
  }, [region])

 /*  useEffect(() => {
    async function getRegion(){
     const res= await axios.get(`https://restcountries.com/v3.1/region/${region}`)
    setRegion(res.data)
     }
     getRegion();
  }, [])
 */
  
  return (
    <div className='app'>
      <Home data={data} filterRegion={region} setFilterRegion={setRegion}/>

    </div>
  );
}

export default App;
