import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./Alunos.css";
import Paper from "@material-ui/core/Paper";
import AlunoItem from "./AlunoItem";
import Cadastro from "./cadastro/Cadastro";
import CircularProgress from "@material-ui/core/CircularProgress";
export default class Alunos extends React.Component {
  state = {
    alunos: "",
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

  loadingAlunos() {
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
                {this.state.alunos === "" ? (
                  <CircularProgress
                    size={70}
                    style={{ color: "rgb(76, 175, 80)" }}
                  />
                ) : (
                  this.state.alunos.map((e) => {
                    return (
                      <Paper
                        className="gridAlunoItem"
                        key={e._id}
                        elevation={15}
                       
                      >
                        <AlunoItem
                          data={e}
                          loadingAlunos={this.loadingAlunos}
                        />
                      </Paper>
                    );
                  })
                )}
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
