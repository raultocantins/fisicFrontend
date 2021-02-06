import React, { useState } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from '@material-ui/icons/Check';
import "./Renovar.css";
export default function RenovarMatricula(props) {
  const [select, setSelect] = useState("1");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  var data = props.data;

  function RenovarMatricula() {
    setLoading(true);
    var baseUrl = "http://localhost:4000/aluno";
    var option = select;
    Axios.patch(`${baseUrl}/${data._id}/renovar`, { option })
      .then((res) => {
          setLoading(false);
        setSuccess(true);
        window.location.reload()
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setValue(value) {
    setSelect(value);
  }
  return (
    <div className="renovarMatricula">
      <ButtonGroup
        color="secondary"
        aria-label="outlined primary button group"
        size="small"
        variant="contained"
      >
        <Button
          onClick={() => setValue("1")}
          color={select === "1" ? "secondary" : "default"}
        >
          Mês
        </Button>
        <Button
          onClick={() => setValue("2")}
          color={select === "2" ? "secondary" : "default"}
        >
          Trimestre
        </Button>
        <Button
          onClick={() => setValue("3")}
          color={select === "3" ? "secondary" : "default"}
        >
          Anual
        </Button>
      </ButtonGroup>
      {loading ? <CircularProgress /> : ""}

      {success ? (
        <h1>Matricula Renovada</h1>
      ) : (


        <Button
          size="small"
         
          onClick={RenovarMatricula}
        >
          <CheckIcon style={{color:"green"}}  />
        </Button>
      )}
    </div>
  );
}
