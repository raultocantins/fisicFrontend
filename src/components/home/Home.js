import React from 'react';
import './Home.css'
import ChartHome from '../charts/ChartHomeQtd'

export default function Home(){

    return(
        <div className="home">
       <ChartHome/>
       <ChartHome/>
       <ChartHome/>
       <ChartHome/>
        </div>
    );
}