import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './product.css'



const Products = ({ data }) => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      marginLeft:10
      }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((data, index) => (
          <Grid item xs={2} sm={2} md={4}  key={index}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="180"
                image={data.recipe.image}
                alt=""
              />
              <CardContent sx={{backgroundColor:"rgba(18, 19, 18,0.7)",height: 50}}>
                <Typography gutterBottom variant="h6" component="div" sx={{ color:"white"}}>
                  {data.recipe.label}
                </Typography>
                <Typography variant="body1" color="text.secondary"sx={{ color:"white"}} >
                Total Amount Of Calories : {Math.round(data.recipe.calories)} 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Products