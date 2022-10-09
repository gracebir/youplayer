import React from 'react'
import './Playvideo.css'
import YouTube from 'react-youtube'

function PlayVideo() {
    const onPlayerReady = (e) => {
        e.target.pauseVideo()
    }

    const opts = {
        height: '700px',
        width: '100%',
        playerVars:{
            autoplay: 1
        }
    }
  return (
    <div className='playvideo'>
      <div className='playvideo_container'>
        <YouTube className='playedvideo' videoId="ZtavurQh8_U" opts={opts} onReady={onPlayerReady} />
      </div>
    </div>
  )
}

export default PlayVideo
