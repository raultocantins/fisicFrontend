import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import querystring from "querystring";
import LinearProgress from "@material-ui/core/LinearProgress";
import Axios from "axios";
import "./Cadastro.css";
import TextField from "@material-ui/core/TextField";
export default class Cadatro extends React.Component {
  state = {
    id: "",
    options: [
      { option: "Mês", value: "1" },
      { option: "Trimestre", value: "2" },
      { option: "Anual", value: "3" },
    ],
    option: "",
    name: "",
    number: "",
    age: "",
    fat: "",
    weight: "",
    height: "",
    pressure: "",
    load: false,
  };
  constructor(props) {
    super(props);

    this.SubmitForm = this.SubmitForm.bind(this);
  }
  componentDidMount() {
    var id = querystring.parse(window.location.href);
    if (id.id) {
      this.setState({
        load: true,
      });
      Axios.get(`http://localhost:4000/alunos/${id.id}`)
        .then((res) => {
          var day =
            new Date(res.data.age).getDate() >= 10
              ? new Date(res.data.age).getDate()
              : `0${new Date(res.data.age).getDate()}`;
          var month =
            new Date(res.data.age).getUTCMonth() + 1 >= 10
              ? new Date(res.data.age).getUTCMonth() + 1
              : `0${new Date(res.data.age).getUTCMonth() + 1}`;
          var year = new Date(res.data.age).getUTCFullYear();
          var age = `${year}-${month}-${day}`;
          this.setState({
            id: res.data._id,
            //  option: res.data.exp,
            name: res.data.name,
            number: res.data.number,
            age: age,
            fat: res.data.fat,
            weight: res.data.weight,
            height: res.data.height,
            pressure: res.data.pressure,
            load: false,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ load: false });
        });
    }
  }

  handleChange(e) {
    this.setState({ option: e.target.value });
  }
  handleChangeTextField(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  SubmitForm() {
    var baseUrl = "http://localhost:4000/alunos";

    var aluno = {
      option: this.state.option,
      name: this.state.name,
      number: this.state.number,
      weight: parseFloat(this.state.weight),
      height: parseFloat(this.state.height),
      pressure: parseFloat(this.state.pressure),
      fat: parseFloat(this.state.fat),
      age: new Date(this.state.age),
    };

    if (this.state.id) {
      aluno.id = this.state.id;
    } else {
      aluno.dateregister = new Date();
    }
    Axios.post(baseUrl, aluno)
      .then((value) => {
        alert(value.data);
        console.log(value);
        window.location.reload();
        window.location.href='/alunos'
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.load ? <LinearProgress color="secondary" /> : ""}
        <h1>{this.state.id ? "Alteração de Aluno" : "Cadastro de Aluno"}</h1>

        <Grid container spacing={3} className="containerCadastro">
          <Grid item xs={10} className="cadastro">
            <TextField
              className="textfield"
              id="outlined-basic"
              variant="outlined"
              label="Nome"
              color="primary"
              value={this.state.name}
              name="name"
              onChange={(e) => this.handleChangeTextField(e)}
            />
            <TextField
              onChange={(e) => this.handleChangeTextField(e)}
              className="textfield"
              id="outlined-basic"
              variant="outlined"
              label="Telefone"
              color="primary"
              type="number"
              name="number"
              value={this.state.number}
            />
            <TextField
              onChange={(e) => this.handleChangeTextField(e)}
              className="textfield"
              id="standard-required"
              variant="outlined"
              color="primary"
              type="date"
              name="age"
              value={this.state.age}
            />

            <TextField
              onChange={(e) => this.handleChangeTextField(e)}
              className="textfield"
              id="outlined-basic"
              variant="outlined"
              label="Percentual de Gordura"
              color="primary"
              type="number"
              name="fat"
              value={this.state.fat}
            />
            <TextField
              onChange={(e) => this.handleChangeTextField(e)}
              className="textfield"
              id="outlined-basic"
              variant="outlined"
              label="Peso"
              color="primary"
              type="number"
              name="weight"
              value={this.state.weight}
            />
            <TextField
              onChange={(e) => this.handleChangeTextField(e)}
              className="textfield"
              id="outlined-basic"
              variant="outlined"
              label="Pressão"
              color="primary"
              name="pressure"
              type="number"
              value={this.state.pressure}
            />

            <TextField
              onChange={(e) => this.handleChangeTextField(e)}
              className="textfield"
              id="outlined-basic"
              variant="outlined"
              label="Altura"
              color="primary"
              name="height"
              type="number"
              value={this.state.height}
            />
            <TextField
              disabled={this.state.id ? true : false}
              className="textfield"
              id="standard-select-currency"
              label="Kit"
              select
              value={this.state.option}
              color="primary"
              onChange={(e) => this.handleChange(e)}
            >
              {this.state.options.map((option) => (
                <MenuItem key={option.option} value={option.value}>
                  {option.option}
                </MenuItem>
              ))}
            </TextField>
            <Grid item xs={12}>
              <Button
              variant="contained"
                color={this.state.id ? "secondary" : "primary"}
                style={{ margin: "50px" }}
                onClick={this.SubmitForm}
              >
                {this.state.id ? "Alterar" : "Cadastrar"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
