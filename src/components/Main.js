import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Home from "./home/Home";
import Alunos from "./alunos/Alunos";
import Settings from "./settings/Settings";
import Cadastro from "./alunos/cadastro/Cadastro";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
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
            <Grid item xs={2}>
              <AppBar position="static" className="app">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  className="titleLogo"
                >
                  <h3>Academia Fisic</h3>
                </Link>

                <Toolbar className="toolbar" className="toolbarApp">
                  {this.state.mobile ? (
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                  ) : (
                    <Typography
                      variant="h6"
                      color="inherit"
                      className="buttons"
                    >
                      <Link to="/">
                        {" "}
                        <Button>
                          <DashboardIcon />
                          {/*DashBoard */}
                        </Button>
                      </Link>

                      <Link to="/alunos">
                        {" "}
                        <Button>
                          <GroupIcon />
                          {/*Alunos */}
                        </Button>
                      </Link>
                      <Link to="/settings">
                        {" "}
                        <Button>
                          <SettingsIcon />
                          {/*  Settings */}
                        </Button>
                      </Link>
                      <Link to="/register/aluno">
                        {" "}
                        <Button>
                          <PersonAddIcon />
                          {/*  Cadastrar Aluno */}
                        </Button>
                      </Link>
                    </Typography>
                  )}
                </Toolbar>
              </AppBar>
            
            </Grid>
            <Grid item xs={10} className="container">
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
