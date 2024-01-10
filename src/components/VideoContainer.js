import React, { useEffect, useState } from "react";
import { YouTube_Video_Api } from "../utils/constant";
import Videos from "./Videos";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos,setVideos]=useState([])
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YouTube_Video_Api);
    const json = await data?.json();
   
    setVideos(json?.items ||[]);
  };

  return (
    <div className="flex flex-wrap px-[20]">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <Videos info={video} id={video.id} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
