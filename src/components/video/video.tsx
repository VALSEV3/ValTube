import Header from "../header/header";
import Iframe from "./iframe";
import { VideoInterface } from "../../models/videocard";

const Video = () => {

  const videoData = localStorage.getItem("video");
  

  const video: VideoInterface = videoData ? JSON.parse(videoData):'';
  
  const iframe=video.src
 

console.log("src:",iframe)

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Iframe iframe={iframe} />
      </main>
    </>
  );
};

export default Video;
