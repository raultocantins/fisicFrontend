import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RenovarMatricula from "./Renovar/Renovar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./AlunoItem.css";
export default function AlunoItem(props) {
  var data = props.data;
  const [openRenovar, setRenovar] = useState(false);
  function openContainerRenovar() {
    setRenovar(!openRenovar);
  }

  return (
    <React.Fragment>
      <Card className="cardAluno">
        <CardActionArea style={{ height: "70%", width: "100%" }}>
          {openRenovar ? (
            <CardContent className="cardRenovar">
              <RenovarMatricula data={data} />
            </CardContent>
          ) : (
            <CardContent className="cardTopAluno">
              <Link
                to={`/register/aluno/key=update&id=${data._id}`}
                className="linkCardAluno"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  className="typographyName"
                >
                  {data.name.toUpperCase()}{" "}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="typography"
                >
                  <Button
                    size="small"
                    variant="contained"
                    style={
                      data.exp > new Date().getTime()
                        ? { backgroundColor: "rgb(76, 175, 80)" }
                        : { backgroundColor: "#FF5252" }
                    }
                  >
                    <span> {data.weight}kg</span>
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    style={
                      data.exp > new Date().getTime()
                        ? { backgroundColor: "rgb(76, 175, 80)" }
                        : { backgroundColor: "#FF5252" }
                    }
                  >
                    <span> {data.fat}%</span>
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    style={
                      data.exp > new Date().getTime()
                        ? { backgroundColor: "rgb(76, 175, 80)" }
                        : { backgroundColor: "#FF5252" }
                    }
                  >
                    <span> {data.pressure}</span>
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    style={
                      data.exp > new Date().getTime()
                        ? { backgroundColor: "rgb(76, 175, 80)" }
                        : { backgroundColor: "#FF5252" }
                    }
                  >
                    <span> {data.height}m</span>
                  </Button>

                  <span
                    style={{
                      fontSize: "9px",
                      color: "#212121 ",
                      margin: "10px",
                    }}
                  >
                    {" "}
                    Vencimento Da Mátricula{" "}
                    <strong
                      style={
                        data.exp > new Date().getTime()
                          ? {
                              fontWeight: "800",
                              color: "rgb(76, 175, 80)",
                              padding: "5px",
                            }
                          : {
                              fontWeight: "800",
                              color: "#FF5252",
                              padding: "5px",
                            }
                      }
                    >
                      {" "}
                      {new Date(data.exp).toLocaleDateString()}
                    </strong>
                  </span>
                </Typography>
              </Link>
            </CardContent>
          )}
        </CardActionArea>
        <CardActions style={{ height: "30%" }} className="cardBottomAluno">
          <Button
            variant="contained"
            size="small"
            style={
              data.exp > new Date().getTime()
                ? { color: "rgb(76, 175, 80)", backgroundColor: "#fff" }
                : { color: "#FF5252", backgroundColor: "#fff" }
            }
            onClick={openContainerRenovar}
            startIcon={
              openRenovar ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />
            }
          >
            {openRenovar ? "" : "Renovar"}
          </Button>

          <Link
            to={`/register/aluno/key=update&id=${data._id}`}
            style={{ textDecoration: "none" }}
          >
            {openRenovar ? (
              ""
            ) : (
              <Button size="small" style={{ fontSize: "10px" }}>
                Alterar
              </Button>
            )}
          </Link>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
