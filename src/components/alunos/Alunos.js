import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios";
import "./Alunos.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AlunoItem from "./AlunoItem";
import Cadastro from "./cadastro/Cadastro";
import Button from "@material-ui/core/Button";
export default class Alunos extends React.Component {
  state = {
    alunos: [],
  };

  componentDidMount() {
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
          <div className="menu">
            <Link to="/alunos" exact={true}>
              {" "}
              <Button variant="contained" size="large">
                Alunos
              </Button>
            </Link>

            <Link to="/register/aluno">
              {" "}
              <Button variant="outlined" size="large">
                Cadastrar Aluno
              </Button>
            </Link>
            <Link to="/alunos/desempenho">
              {" "}
              <Button variant="outlined" size="large">
                Desempenho
              </Button>
            </Link>
          </div>

          <div className="alunosContent">
            <Switch>
              <Route path="/alunos" exact>
                <Grid container spacing={2}>
                  {this.state.alunos === undefined
                    ? "Nenhuma aluno"
                    : this.state.alunos.map((e) => {
                        return (
                          <Grid item lg={3} key={e.id}>
                            <Paper>
                              <AlunoItem data={e} />
                            </Paper>
                          </Grid>
                        );
                      })}
                </Grid>
              </Route>
              <Route path="/register/aluno">
                <Cadastro />
              </Route>
              <Route path="/atualizar/aluno">
                <h1>Desempenho</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
