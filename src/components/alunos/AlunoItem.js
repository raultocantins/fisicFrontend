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
        <CardActionArea>
          {openRenovar ? (
            <CardContent className="cardRenovar">
              <RenovarMatricula data={data} />
            </CardContent>
          ) : (
            <CardContent>
              <Link
                to={`/register/aluno/key=update&id=${data._id}`}
                className="linkCardAluno"
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  className="typographyName"
                >
                  {data.name}{" "}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="typography"
                >
                  <Button size="small" variant="contained" color="secondary">
                    <span style={{ fontSize: "9px" }}>
                      {" "}
                      Peso {data.weight}kg
                    </span>
                  </Button>

                  <Button size="small" variant="contained" color="secondary">
                    <span style={{ fontSize: "9px" }}>
                      {" "}
                      Gordura {data.fat}%
                    </span>
                  </Button>

                  <Button size="small" variant="contained" color="secondary">
                    <span style={{ fontSize: "9px" }}>
                      {" "}
                      Pressão {data.pressure}
                    </span>
                  </Button>

                  <Button size="small" variant="contained" color="secondary">
                    <span style={{ fontSize: "9px" }}>
                      {" "}
                      Altura {data.height}m
                    </span>
                  </Button>
                 
                    <span style={{ fontSize: "9px", marginTop:'10px' }}>
                      {" "}
                   Vencimento Da Mátricula {new Date(data.exp).toLocaleDateString() }
                    </span>
                  
                </Typography>
              </Link>
            </CardContent>
          )}
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            size="small"
        
            style={data.exp > new Date().getTime()?{backgroundColor:"rgb(76, 175, 80)",color:"#ffff"}:{backgroundColor:"rgb(220, 0, 78)",color:"#ffff"}}
            onClick={openContainerRenovar}
            startIcon={
              openRenovar ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />
            }
          >
           {openRenovar?'':'Renovar'}
          </Button>

          <Link
            to={`/register/aluno/key=update&id=${data._id}`}
            style={{ textDecoration: "none" }}
          >
            {openRenovar ? (
              ""
            ) : (
              <Button size="small" color="primary">
                Alterar
              </Button>
            )}
          </Link>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
