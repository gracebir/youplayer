import React from 'react'
import Videocard from '../VideoCard'
import './Video.css';
// UC8butISFwT-Wl7EV0hUK0BQ
function Video({ videos }) {
  return (
    <div className='video'>
      {videos?.map((video, i)=>(
         <Videocard 
          key={i}
          thumnail={video.snippet.thumbnails.high.url}
          auther_img={"https://yt3.ggpht.com/ytc/AMLnZu-Bwb4KHlwhGRHSf0hreeqn0GfDOdfWgEgHH2qd=s68-c-k-c0x00ffffff-no-rj"}
          title={video.snippet.title}
          author={video.snippet.channelTitle}
         />
      ))}
    </div>
  )
}

export default Video
