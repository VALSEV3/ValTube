import { VideoInterface } from "../../models/videocard"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

const VideoCard: React.FC<VideoInterface>=({img,title})=>{
return(
  <>
  <Card sx={{  maxWidth: 363,border:'none',boxShadow:'none',height:345,'&:hover': {
      cursor:'pointer'
    },}}>
 


<Box
  sx={{
    borderRadius: '12px', // Обрезаем углы для контейнера
    overflow: 'hidden',    // Важное свойство для того, чтобы изображение не выходило за границы
    transition: '0.2s linear',
    margin: "15px",
    marginBottom:'5px',
    '&:hover': {
      borderRadius: '1px',
      cursor:'pointer'
    },
  }}
>
  <CardMedia 
    component="img"
    height="190"
    image={img}
    alt={title}
    sx={{
      width: '100%',  // Убедитесь, что изображение занимает весь контейнер
      height: '100%',
      objectFit: 'cover',  // Чтобы изображение правильно масштабировалось
    }}
  />
</Box>


    <CardContent>
    <Typography gutterBottom variant="h6" component="div" sx={{marginTop:"0px",fontWeight:600,color:'var(--color)'}}>
          {title}
          </Typography>
    </CardContent>
  
  </Card>
  </>
)
}

export default VideoCard