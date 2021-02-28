import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import Button from "@material-ui/core/Button";

import SendIcon from "@material-ui/icons/Send";

import LinearProgress from "@material-ui/core/LinearProgress";
const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  tableContainer: {
    height: "100%",
  },
});

export default function DenseTable() {
  const [exp, setExp] = useState("");
  const classes = useStyles();

  useEffect(() => {
    Axios.get("http://localhost:4000/quantidade/expiradas")
      .then((res) => {
        setExp(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  function Cobrar() {
    alert("Deseja realmente cobrar aluno?");
  }

  return (
    <React.Fragment>
      {exp === "" ? (
        <LinearProgress
          color="secondary"
          style={{ backgroundColor: "rgb(76, 175, 80)" }}
        />
      ) : (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <th style={{ padding: "15px", fontSize: "20px" }}>
                  Mensalidades Vencidas{" "}
                </th>
              </TableRow>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Contato</TableCell>
                <TableCell>Data de Registro</TableCell>
                <TableCell>Vencimento</TableCell>
                <TableCell>Cobrar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {exp.map((exp) => (
                <TableRow key={exp.name}>
                  <TableCell component="th" scope="row">
                    {exp.name}
                  </TableCell>
                  <TableCell>{exp.number}</TableCell>
                  <TableCell>
                    {new Date(exp.dateregister).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(exp.exp).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button onClick={Cobrar}>
                      <SendIcon color="secondary" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
}
