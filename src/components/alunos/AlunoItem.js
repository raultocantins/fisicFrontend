import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './AlunoItem.css'
export default function AlunoItem(props) {
  var data = props.data;
  return (
    <React.Fragment>
      <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnggxJzhGVlG6r11A--5dBIvkyhQb2htSYsg&usqp=CAU&ec=45761791"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" >
              {data.name}{" "}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="typography">            
              <Button size="small" variant='contained' color='primary'>
               <span style={{fontSize:'9px'}}> Peso : {data.weight}</span> 
              </Button>

              <Button size="small" variant='contained' color='primary'>
               <span style={{fontSize:'9px'}}> Gordura : {data.fat}</span> 
              </Button>

              <Button size="small" variant='contained' color='primary'>
               <span style={{fontSize:'9px'}}> Pressão : {data.pressure}</span> 
              </Button>

              <Button size="small" variant='contained' color='primary'>
               <span style={{fontSize:'9px'}}> Altura : {data.height}</span> 
              </Button>

             
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        
          <Button variant="contained" size="small" color="secondary">
            Renovar
          </Button>
          <Link to={`/register/aluno/key=update&id=${data._id}`}>

          <Button size="small" color="primary">
            Alterar
          </Button>
          </Link>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
