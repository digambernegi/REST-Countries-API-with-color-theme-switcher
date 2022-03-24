import React, { useContext, useEffect, useState } from "react";
import Home from "./home/Home";
import "./app.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Single from './single/Single'

// 'https://restcountries.com/v3.1/all
// https://restcountries.com/v2/name/peru'
function App() {
  const[region,setRegion]=useState('Africa')
  const [data,setData]=useState([]);
  const[input,setInput]=useState('')


  useEffect(() => {
    async function getDataByRegion(){

      const res= await  axios.get(`https://restcountries.com/v3.1/region/${region}`)
     console.log(res.data)
    setData(res.data)
    }
    getDataByRegion();
  }, [ region ])

  async function getDataBySearch(){
    const res= await axios.get(`https://restcountries.com/v2/name/${input}`)
  setData(res.data)
  setInput('')
  } 

 
  
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home getDataBySearch={getDataBySearch} input={input} setInput={setInput} data={data} filterRegion={region} setFilterRegion={setRegion}/>}>
      </Route>

      <Route path='flags'>
       <Route index element={<Single data={data}/>}></Route> 
      </Route>
      
      </Routes>
    </div>
  );
}

export default App;
