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
            <Grid item xs={12}>
              <AppBar position="static" style={{backgroundColor:"rgb(76, 175, 80)"}} className="app">
             
              
            
              <Link to="/" style={{textDecoration:"none",color:"#fff"}} className="titleLogo">
<h3>Academia Fisic</h3>
</Link>

                   
             
                  
               
                <Toolbar className="toolbar">{this.state.mobile?
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>:
                
                  <Typography variant="h6" color="inherit" className="buttons" >
             
                    <Link to="/">
                      {" "}
                      <Button   size="small" style={{border:"1px solid #fff",color:"#fff"}}>
                        Inicio
                      </Button>
                    </Link>

                    <Link to="/alunos">
                      {" "}
                      <Button  size="small" style={{border:"1px solid #fff",color:"#fff"}}>
                        Alunos
                      </Button>
                    </Link>
                    <Link to="/settings">
                      {" "}
                      <Button  size="small" style={{border:"1px solid #fff",color:"#fff"}}>
                        Settings
                      </Button>
                    </Link>
                    <Link to="/register/aluno">
                      {" "}
                      <Button  size="small" style={{border:"1px solid #fff",color:"#fff"}}>
                        Cadastrar Aluno
                      </Button>
                    </Link>
                  </Typography>
        }

                </Toolbar>
              </AppBar>
              {/* 


              
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
                */}
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
