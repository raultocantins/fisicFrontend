import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./AlunoItem.css";
export default function AlunoItem(props) {
  var data = props.data;


  return (

    <React.Fragment>
      
        <Card className="cardAluno">
          <CardActionArea >
            
            <CardContent >
        <Link to={`/register/aluno/key=update&id=${data._id}`} className="linkCardAluno">
              <Typography gutterBottom variant="h6" className="typographyName">
                {data.name}{" "}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="typography"
              >
                <Button size="small" variant="contained" color="secondary">
                  <span style={{ fontSize: "9px" }}> Peso   {data.weight}kg</span>
                </Button>

                <Button size="small" variant="contained" color="secondary">
                  <span style={{ fontSize: "9px" }}> Gordura   {data.fat}%</span>
                </Button>

                <Button size="small" variant="contained" color="secondary">
                  <span style={{ fontSize: "9px" }}>
                    {" "}
                    Pressão   {data.pressure}
                  </span>
                </Button>

                <Button size="small" variant="contained" color="secondary">
                  <span style={{ fontSize: "9px" }}>
                    {" "}
                    Altura   {data.height}m
                  </span>
                </Button>
              </Typography>
              </Link>
            </CardContent>
         
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small" color="default">
              Renovar
            </Button>
            <Link to={`/register/aluno/key=update&id=${data._id}`} style={{textDecoration:"none"}}> 
              <Button size="small" color="primary" >
                Alterar
              </Button>
            </Link>
          </CardActions>
        </Card>
     
    </React.Fragment>
      

  );
}
