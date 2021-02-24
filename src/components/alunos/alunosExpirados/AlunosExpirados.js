import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./AlunosExpirados.css";
import Paper from "@material-ui/core/Paper";
import AlunoItem from "../AlunoItem";
import Cadastro from "../cadastro/Cadastro";
import CircularProgress from "@material-ui/core/CircularProgress";
export default class AlunosExpirados extends React.Component {
  state = {
    alunos: "",
    expToday: new Date().getTime(),
  };

  componentDidMount() {
    //var paperAluno= document.getElementsByClassName('gridAlunoItem')

    var baseUrl = "http://localhost:4000/mensalidades/expiradas";
    Axios.get(baseUrl)
      .then((res) => {
      console.log(res)
        this.setState({
          alunos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadingAlunos() {
    var baseUrl = "http://localhost:4000/mensalidades/expiradas";
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
              <Route path="/mensalidades/expiradas" exact>
          <h1 style={{width:'100%'}}>Mensalidades Expiradas</h1>
              
                {this.state.alunos === "" ? (
                  <CircularProgress
                    size={70}
                    style={{ color: "rgb(76, 175, 80)" }}
                  />
                ) : (
                  this.state.alunos.map((e) => {

                    return (
                        e?
                      
                      
                      <Paper
                        className={e.exp > new Date().getTime()?'gridAlunoItemTrue':'gridAlunoItemFalse'}
                        key={e._id}
                        elevation={2}
                       
                      >
                        <AlunoItem
                          data={e}
                          loadingAlunos={this.loadingAlunos}
                        />
                      </Paper>:''
                      
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
