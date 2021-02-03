import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Home from "./home/Home";
import Alunos from "./alunos/Alunos";
import Settings from "./settings/Settings";
import Cadastro from "./alunos/cadastro/Cadastro";

import "./Main.css";
export default class Main extends React.Component {
  state = {
    mobile: false,
  };
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      mobile: !this.state.mobile,
    });
  }
  render() {
    return (
      <Router>
        <div className="main">
          <Grid container spacing={0}>
            <Grid item xs={12} className="appbar">
              <div className="spaceBar">
                <div className="logo">
                <Link to="/">
                  <img
                    src="https://www.fisic.com.br/wp-content/uploads/2020/08/Logo-Fisic-Academia-RGB2.jpg"
                    alt="logo"
                  />
                  </Link>
                </div>

                <div className="buttons">
                  <IconButton
                    className="mobile"
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    
                  >
                    <MoreVertIcon />
                  </IconButton>

                  <Link to="/">
                    {" "}
                    <Button variant="outlined" size="small">
                      Inicio
                    </Button>
                  </Link>

                  <Link to="/alunos">
                    {" "}
                    <Button variant="outlined" size="small">
                      Alunos
                    </Button>
                  </Link>
                  <Link to="/settings">
                    {" "}
                    <Button variant="outlined" size="small">
                      Settings
                    </Button>
                  </Link>
                  <Link to="/register/aluno">
                    {" "}
                    <Button variant="outlined" size="small">
                      Cadastrar Aluno
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className="container">
              {this.state.mobile ? (
                <div className="menuMobile">
                  <Link to="/" onClick={this.handleToggle}>
                    {" "}
                    <Button variant="outlined" size="small">
                      Inicio
                    </Button>
                  </Link>

                  <Link to="/alunos" onClick={this.handleToggle}>
                    {" "}
                    <Button variant="outlined" size="small">
                      Alunos
                    </Button>
                  </Link>
                  <Link to="/settings" onClick={this.handleToggle}>
                    {" "}
                    <Button variant="outlined" size="small">
                      Settings
                    </Button>
                  </Link>
                  <Link to="/register/aluno" onClick={this.handleToggle}>
                    {" "}
                    <Button variant="outlined" size="small">
                      Cadastrar Aluno
                    </Button>
                  </Link>
                </div>
              ) : (
                ""
              )}
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
                <Route path="/register/aluno/">
                  <Cadastro />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}
