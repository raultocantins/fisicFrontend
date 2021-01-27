import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Home from "./home/Home";
import Alunos from "./alunos/Alunos";
import Settings from "./settings/Settings";

import "./Main.css";
export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Grid container>
            <Grid item xs={3} className="appbar">
              <img
                src="https://www.fisic.com.br/wp-content/uploads/2020/08/Logo-Fisic-Academia-RGB2.jpg"
                alt="logo"
              />
              <div className="buttons">
                <Link to="/">
                  {" "}
                  <Button variant="outlined" size="large">
                    Inicio
                  </Button>
                </Link>

                <Link to="/alunos">
                  {" "}
                  <Button variant="outlined" size="large">
                    Alunos
                  </Button>
                </Link>
                <Link to="/settings">
                  {" "}
                  <Button variant="outlined" size="large">
                    Settings
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xs={9} className="container">
              <Switch>
                <Route path="/" exact={true}>
                  <Home />
                </Route>
                <Route path="/alunos">
                  <Alunos />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}
