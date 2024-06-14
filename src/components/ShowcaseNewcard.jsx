import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "../styles/PricingCard.module.css";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: "30vw" }}>
      <CardActionArea sx={{display:"flex",flexDirection:"column", gap:"1rem",backgroundColor:"#181815", color:"#fff", border:" 1px solid #ccc" ,   fontFamily: "Clash Display" ,  padding: "2rem",
  borderRadius: '20px'

}}>
        
        <CardContent sx={{display:"flex", flexDirection :"column" , alignItems:"center" , justifyContent:"center"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Clash Display"}}>
Fintech          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:"#fff", fontFamily: "Clash Display"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius autem adipisci reiciendis consequuntur vel saepe temporibus, facere quaerat tenetur quos omnis corrupti beatae, quas minima culpa eaque voluptates aliquid officia.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image="/fintechhreo.svg"
          alt="Fintech"
        />
      </CardActionArea>
    </Card>
  );
}
