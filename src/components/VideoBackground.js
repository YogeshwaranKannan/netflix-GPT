 
import { useSelector } from 'react-redux';
import { useTrailerPlay } from '../Hooks/useTrailerPlay';
 

const VideoBackground = () => {
  const GettrailerKey = useSelector((e)=>e.movies?.videoTrailer);
  useTrailerPlay();
  return (
    <div >
    <iframe className='w-screen aspect-video' 
    src={"https://www.youtube.com/embed/"+ GettrailerKey?.key+ "?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&mute=1"} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    >
    </iframe>
    </div>
    
  )
  
}

export default VideoBackground
