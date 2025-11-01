import { useState } from "react";
import { Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Testimonio({ nombre, pais, profesion, imagen, testimonio }) {
    
  const [meGusta, setMeGusta] = useState(false);

  return (

    // creamos la carta que seria el contenedor principal y dentro del cual van los demas elementos, lo unico que tiene funcionalidad es el boton de me gusta que cambia de estado al hacer click
    <Card sx={{ maxWidth: 400, margin: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="250"
        image={`/src/assets/${imagen}`}
        alt={`Retrato de ${nombre}, ${profesion} de ${pais}`}
      />
      
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {nombre} en {pais}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {profesion}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {testimonio}
        </Typography>
        <IconButton onClick={() => setMeGusta(!meGusta)}>
          {meGusta ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardContent>

    </Card>
  );
}

export default Testimonio;
