import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/videofooter";
import VideoSidebar from "./components/footer/sidebar/VideoSidebar";
import "./video.css";




function Video({likes, messages, shares, name, description, music, url}) {
  const VideoRef = useRef(null);
  const [play, setplay] = useState(false);

  function handdlestart() {
    if (play) {
      VideoRef.current.pause();
      setplay(false);
    }  else {
      VideoRef.current.play();
      setplay(true);
    }
  }

  return (
    <div className="video">
      eu sou um componente de video
      <video
        className="video__player"
        ref={VideoRef}
        onClick={handdlestart}
        loop
        src={url}
      ></video>
      <VideoSidebar 
       likes={likes}
       messages={messages}
       shares={shares}
      />
      <VideoFooter 
      name={name}
      description={description}
      music={music}
      />
    </div>
  );
}

export default Video;
