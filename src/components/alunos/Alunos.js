import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./Alunos.css";
import Paper from "@material-ui/core/Paper";
import AlunoItem from "./AlunoItem";
import Cadastro from "./cadastro/Cadastro";
export default class Alunos extends React.Component {
  state = {
    alunos: [],
    expToday: new Date().getTime(),
  };

  componentDidMount() {
    //var paperAluno= document.getElementsByClassName('gridAlunoItem')

    var baseUrl = "http://localhost:4000/alunos";
    Axios.get(baseUrl)
      .then((res) => {
        this.setState({
          alunos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div className="alunos">
          <div className="alunosContent">
            <Switch>
              <Route path="/alunos" exact>
                {this.state.alunos === undefined
                  ? "Nenhuma aluno"
                  : this.state.alunos.map((e) => {
                      return (
                        <Paper
                          className="gridAlunoItem"
                          key={e.id}
                          elevation={4}
                          variant="outlined"
                          style={
                            this.state.expToday < e.exp
                              ? {
                                  borderTop:
                                    "4px solid  rgba(0, 128, 0, 0.705)",
                                }
                              : { borderTop: "4px solid red" }
                          }
                        >
                          <AlunoItem data={e} />
                        </Paper>
                      );
                    })}
              </Route>
              <Route path="/register/aluno">                        
                    <Cadastro />         
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
