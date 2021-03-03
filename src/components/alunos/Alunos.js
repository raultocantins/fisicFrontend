import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./Alunos.css";
import Paper from "@material-ui/core/Paper";
import AlunoItem from "./alunoItem/AlunoItem";
import Cadastro from "./cadastro/Cadastro";
import LinearProgress from "@material-ui/core/LinearProgress";
import NotFound from "../../assets/not-found.svg";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import baseUrl from "../../utils/baseUrl";
export default class Alunos extends React.Component {
  state = {
    alunos: "",
    expToday: new Date().getTime(),
    loading: true,
    search: "",
  };

  componentDidMount() {
    //var paperAluno= document.getElementsByClassName('gridAlunoItem')

    Axios.get(`${baseUrl}/alunos`)
      .then((res) => {
        this.setState({
          alunos: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadingAlunos() {
    Axios.get(`${baseUrl}/alunos`)
      .then((res) => {
        this.setState({
          alunos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onchange(e) {
    var value = e.target.value;
    this.setState({
      search: value.toLowerCase(),
    });
  }

  renderAlunos = (aluno) => {
    const { search } = this.state;
    if (search !== "" && aluno.name.indexOf(search) === -1) {
      return null;
    }
    return (
  

    
    
        <Paper
          className={
            aluno.exp > new Date().getTime()
              ? "gridAlunoItemTrue"
              : "gridAlunoItemFalse"
          }
          key={aluno._id}
          elevation={2}
        >
          <AlunoItem data={aluno} loadingAlunos={this.loadingAlunos} />
        </Paper>
       
    );
  };

  render() {
    return (
      <Router>
        <div
          className="alunos"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {this.state.loading ? (
            <LinearProgress
              color="secondary"
              style={{
                width: "100vw",
                top: "0px",
                position: "absolute",
                right: "0px",
              }}
            />
          ) : (
            ""
          )}
          <div className="barSearch">
            <InputBase
              placeholder="Search Aluno…"
              className="inputBase"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => this.onchange(e)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>

          <div className="alunosContent">
       
            <Switch>
              <Route path="/alunos" exact>
       

                {this.state.alunos === "" ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <img
                      src={NotFound}
                      alt="not Found"
                      style={{ width: "50%", height: "50%" }}
                    />

                    <h1>Nenhum aluno cadastrado !!!</h1>
                  </div>
                ) : (
                  <ReactCSSTransitionGroup
                  style={{display:'flex',justifyContent:'center',flexWrap:'wrap',alignItems:"center"}}
                  transitionName="fade"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={0}
                  >

                  {this.state.alunos.map((e) => this.renderAlunos(e))}
                              
</ReactCSSTransitionGroup>
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
