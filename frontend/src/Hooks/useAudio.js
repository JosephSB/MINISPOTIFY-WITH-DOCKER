import { useState, useEffect } from "react";

const useAudio = () =>{
    const [audio, setAudio] = useState(null);
    const [playing, setPlaying] = useState(false);
  
    useEffect(() => {
        setAudio(new Audio())
    }, []);

    return [playing,setPlaying,audio];
}

export default useAudio