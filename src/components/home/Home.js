import React from 'react';
import Paper from '@material-ui/core/Paper';
import ChartAlunos from '../charts/ChartAlunos'
import ListAlunoExp from '../listAlunosExp/ListAlunoExp'
import './Home.css'

export default function Home(){

    return(
        <div className="home">
      <Paper elevation={3} className="graphicBox" >
 <ChartAlunos/>
      </Paper>
      <Paper elevation={3} className="listAlunoExp" >
 <ListAlunoExp/>
      </Paper>
    
        </div>
    );
}