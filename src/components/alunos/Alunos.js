import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Alunos.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AlunoItem from "./AlunoItem";

import Button from "@material-ui/core/Button";
export default class Alunos extends React.Component {
  state = {
    alunos: [
      { name: "Douglas dos santos" },
      { name: "Elenilson beltrão" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
      { name: "alex" },
    ],
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="alunos">
          <div className="menu">
            <Link to="/" exact={true}>
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
              <Route path="/" exact={true}>
                <Grid container spacing={3}>
                  {this.state.alunos === undefined
                    ? "Nenhuma aluno"
                    : this.state.alunos.map((e) => {
                        return (
                          <Grid item lg={3}>
                            <Paper>
                              <AlunoItem data={e} />
                            </Paper>
                          </Grid>
                        );
                      })}
                </Grid>
              </Route>
              <Route path="/register/aluno">
                <h1>cadastrar aluno</h1>
              </Route>
              <Route path="/alunos/desempenho">
                <h1>Desempenho</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
