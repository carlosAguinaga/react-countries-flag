import React from 'react'
import Flag from '../components/Flag';
import useFetchData from '../hooks/useFetchData';
import '../styles/Home.css';

const Home = () => {
    const { data } = useFetchData('https://restcountries.eu/rest/v2/all');
    console.log('componete countries');
    console.log(data);

    return (
        <div className="container home-container">
            {data && data.slice(1,8).map( (el) => <Flag name={el.name} img={el.flag} key={el.name}/> ) }
        </div>
    )
}

export default Home
