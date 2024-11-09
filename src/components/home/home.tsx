import Header from '../header/header';
import React from 'react';
import { VideoInterface } from '../../models/videocard';
import VideoCard from './videoCard';
import './home.css';

const Home: React.FC = () => {
  const Videos: VideoInterface[] = [
    {
      img: 'https://i.ytimg.com/vi/u58maMhtv04/hq720.jpg?v=67139460&sqp=CMiXz7gG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-8O-63wFp42wx50L1Mx8OjXu3Pg',
      title: 'New Season Minecraft 400 mods Stream',
      src:"https://www.youtube.com/embed/u58maMhtv04",
    },
    {
      img: 'https://i.ytimg.com/vi/nrXy15orKhY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMcBwsM6_3e44jr8zvHizgkFxcLA',
      title: 'Lp. Heart Of Galaxy #30 TWO IN ONE [One human].MINECRAFT',
      src:"https://www.youtube.com/embed/nrXy15orKhY",
    },
    {
      img:"https://i.ytimg.com/vi/f5r9B4dCZsc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy61ISXdEOuSeRUhqJ_RFFQmFJTw",
      title:"CRYPTOCURRENCY through the eyes of a BEGINNER in 2023 | P2P ARBITRAGE",
      src:"https://www.youtube.com/embed/f5r9B4dCZsc",
    },
    {img:"https://i.ytimg.com/vi/7hxSdBTMzPE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4SCkOYhWwMExOxo3H1FXJo-ga_g",
      title:"Укрясть за 60 секунд",
      src:"https://www.youtube.com/embed/7hxSdBTMzPE",
    },
    {img:"https://i.ytimg.com/vi/OKiZ4kA0KyU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuv6QsGN7iJPTDqivtcIZdHzeM7w",
      title:"Frontend  Roadmap.Сравнение 2017 vs 2021 vs 2024",
      src:"https://www.youtube.com/embed/OKiZ4kA0KyU",
    },
    {img:"https://i.ytimg.com/vi/DhleEgRmWF8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLaDxB_6ikD-knuyfWE7bIYXwqTg",title:"Самый БЫСТРЫЙ путь до работы frontend.Frontend Roadmap 2024", src:"https://www.youtube.com/embed/DhleEgRmWF8",},
  ];

  return (
    <>
      <header>
        <Header />
      </header>
      <main
        id="main"
      
      >
        {Videos.map((video, index) => (
          <VideoCard key={index} src={video.src} img={video.img} title={video.title} />
        ))}
      </main>
    </>
  );  
  
};

export default Home;
