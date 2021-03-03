import React, { useState } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import "./Renovar.css";
import baseUrl from '../../../utils/baseUrl'
export default function RenovarMatricula(props) {
  const [select, setSelect] = useState("1");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  var data = props.data;

  function RenovarMatricula() {
    setLoading(true);   
    var option = select;
  
    Axios.patch(`${baseUrl}/aluno/${data._id}/renovar`, { option })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        window.location.reload();
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
        aria-label="outlined primary button group"
        size="small"
        variant="contained"
        className="groupButtons"
      >
        <Button
          onClick={() => setValue("1")}
          style={
            select === "1"
              ? { backgroundColor: "#FF5252", color: "#fff" }
              : { backgroundColor: "#ffff", color: "#9E9E9E" }
          }
        >
          Mês
        </Button>
        <Button
          onClick={() => setValue("2")}
          style={
            select === "2"
              ? { backgroundColor: "#FF5252", color: "#fff" }
              : { backgroundColor: "#ffff", color: "#9E9E9E" }
          }
        >
          Trimestre
        </Button>
        <Button
          onClick={() => setValue("3")}
          style={
            select === "3"
              ? { backgroundColor: "#FF5252", color: "#fff" }
              : { backgroundColor: "#ffff", color: "#9E9E9E" }
          }
        >
          Anual
        </Button>
      </ButtonGroup>
      {loading ? (
        <CircularProgress style={{ color: "rgb(76, 175, 80)" }} />
      ) : (
        ""
      )}

      {success ? (
        <h3>Matricula Renovada</h3>
      ) : (
        <div onClick={RenovarMatricula}>
          <Button size="small" onClick={RenovarMatricula}>
            <CheckIcon style={{ color: "green" }} />
          </Button>

          <p>Confirmar Renovação</p>
        </div>
      )}
    </div>
  );
}
