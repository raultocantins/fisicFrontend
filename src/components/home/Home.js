import React from 'react';
import Paper from '@material-ui/core/Paper';
import ChartAlunos from '../charts/ChartAlunos'
import './Home.css'

export default function Home(){

    return(
        <div className="home">
      <Paper elevation={3} className="graphicBox" >
 <ChartAlunos/>
      </Paper>
        </div>
    );
}