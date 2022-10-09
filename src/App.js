import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Video from './components/Video';
import { youtube_seach, youtube_subscrition } from './youtube'
import { Routes, Route } from 'react-router-dom';
import PlayVideo from './components/PlayVideo';
import Auth from './components/Auth';

function App() {
  const [videos, setVideos] = useState([])

  // onsearch function
  const search = async (keywork) => {
    const response = await youtube_seach.get('/search',{
      params:{
        q: keywork
      }
    });
    setVideos(response.data.items)
  }

  // get subscription data
  const subscription = async () => {
    const response = await youtube_subscrition.get('/subscriptions');
    setVideos(response.data.items)
  }

  useEffect(()=>{
    subscription()
    search("react js")
  },[])

  return (
    <div>
      <NavBar search={search}/>
      <Routes>
        <Route path='/' element={<Video videos={videos}/>}/>
        <Route path=':videoId' element={<PlayVideo videos={videos}/>}/>
        <Route path='/login' element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
