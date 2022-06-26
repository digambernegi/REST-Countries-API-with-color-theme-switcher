import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [region, setRegion] = useState("Europe");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function getDataByRegion() {
      const res = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setData(res.data);
    }
    getDataByRegion();
  }, [region]);

  async function getDataBySearch() {
    const res = await axios.get(`https://restcountries.com/v2/name/${input}`);
    setData(res.data);
    setInput("");
  }

  return (
    <StateContext.Provider
      value={{
        region,
        setRegion,
        data,
        setData,
        input,
        setInput,
        getDataBySearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
