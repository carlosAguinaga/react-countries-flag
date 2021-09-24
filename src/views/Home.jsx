import React, { useLayoutEffect, useRef, useState } from "react";
import Flag from "../components/Flag";
import useFetchData from "../hooks/useFetchData";
import "../styles/Home.css";

const Home = () => {
  const [numIntems, setNumIntems] = useState(20);

  const { data } = useFetchData("https://restcountries.com/v3/all");
  
  const myRef = useRef();
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (
        data &&
        numIntems < data.length &&
        window.scrollY + window.innerHeight >= myRef.current.scrollHeight
        // window.scrollY + window.innerHeight >= window.document.documentElement.scrollHeight
      ) {
        setNumIntems(numIntems + 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [numIntems, data]);


  return (
    <div className="home-section">
      <h2 className="title-home">All Countries</h2>
      <div className="home-container" ref={myRef}>
        {data &&
          data
            .slice(0, numIntems)
            .map((el, index) => <Flag name={el.name.common} img={el.flags[0]} key={index} />)}
      </div>
    </div>
  );
};

export default Home;
