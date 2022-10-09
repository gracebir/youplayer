import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Video from './components/Video';
import { youtube_seach } from './youtube'

function App() {
  const [videos, setVideos] = useState([])
  const search = async (keywork) => {
    const response = await youtube_seach.get('/search',{
      params:{
        q: keywork
      }
    });
    setVideos(response.data.items)
  }
  useEffect(()=>{
    search("react js")
  },[])

  

  return (
    <div>
      <NavBar search={search}/>
      <Video videos={videos}/>
    </div>
  );
}

export default App;
