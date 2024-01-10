import React from "react";

const Videos = ({ info }) => {
  
    if (!info) {
        return <div>Info is undefined</div>;
      }
    
      // Check if snippet and statistics properties exist in info
      if (!info.snippet || !info.statistics) {
        return <div>Snippet or Statistics is missing in info</div>;
      }
    
  const { snippet,statistics  } = info;

  
  
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 w-[16rem] shadow-lg">
    <img className="rounded-lg" src={thumbnails?.medium?.url} alt="title"/>
    <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
    </ul>
    </div>
  );
};

export default Videos;
