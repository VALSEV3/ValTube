import { VideoInterface } from "../../models/videocard"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard=(video:VideoInterface)=>{

  const onCardClick=()=>{
localStorage.setItem("video", JSON.stringify(video));
  }

return(
  <>
  <Card sx={{  maxWidth: 363,backgroundColor:'var(--background-color)',border:'none',boxShadow:'none',height:315,'&:hover': {
      cursor:'pointer'
    },}}
    component={Link}
    to='/Watch'
    onClick={onCardClick}
    >
 


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
    image={video.img}
    alt={video.title}
    sx={{
      width: '100%',  // Убедитесь, что изображение занимает весь контейнер
      height: '100%',
      objectFit: 'cover',  // Чтобы изображение правильно масштабировалось
    }}
  />
</Box>


    <CardContent>
    <Typography gutterBottom variant="h6" component="div" sx={{marginTop:"0px",fontWeight:600,color:'var(--color)'}}>
          {video.title}
          </Typography>
    </CardContent>
  
  </Card>
  </>
)
}

export default VideoCard