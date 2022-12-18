import { createContext, useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";
import useAudio from "../Hooks/useAudio";
import useEventListener from "../Hooks/useEventListener";

const AudioContext = createContext();

const dataSongActual = {
  ImgPortada: "",
  NameSong: "",
};

const DataAudioProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [pointer, setPointer] = useState(0);
  const [volumen, setVolumen] = useState(100);
  const [playlists, setPlaylists] = useState([]);
  const [playing, setPlaying, audio] = useAudio();
  const [dataSong, setDataSong] = useState(dataSongActual);

  const getSongs = async (page) => {
    helpHttp()
      .get(process.env.REACT_APP_API_KEY_URL + "music/getSongs/page=" + page)
      .then((data) => {
        setSongs(data.data);
        return true;
      });
  };

  const getPlaylists = async (UserID) =>{
    let options = {
        body: {userID : UserID}
    }
    let url = process.env.REACT_APP_API_KEY_URL+'playlist/getPlaylist'

    helpHttp().post(url,options).then(res => {
        if(res.operation) setPlaylists(res.data)
    })
  }

  const playSong = (URLPORTADA, SONGNAME, URL_AUDIO,index) => {
    audio.pause();
    setDataSong({
      ImgPortada: URLPORTADA,
      NameSong: SONGNAME,
    });
    setPointer(index);
    audio.src = URL_AUDIO;
    setPlaying(true);
    audio.play();
  };

  const prevSong = () => {
    if(songs.length >0){
        let x = pointer - 1;
        if (x < songs.length && x >= 0) handlePointer(x);
        else handlePointer(0);
    }
  };

  const nextSong = () => {
    if(songs.length >0){
      let x = pointer + 1;
      if (x < songs.length) handlePointer(x);
      else handlePointer(0);
    }
  };

  const changePlaylist = (newSongs) =>{
    setSongs(newSongs);
    let { URLPORTADA, SONGNAME, URL_AUDIO } = newSongs[0];
    playSong(URLPORTADA, SONGNAME, URL_AUDIO,0);
  }

  const handlePointer = (point) =>{
    setPointer(point);
    let { URLPORTADA, SONGNAME, URL_AUDIO } = songs[point];
    playSong(URLPORTADA, SONGNAME, URL_AUDIO,point);
  }

  const handleplay = async(e) => {
      playing ? audio.pause() : audio.play();
      setPlaying(!playing);
  };

  const handleVolumne = (e) => {
    setVolumen(e.target.value);
    audio.volume = parseInt(e.target.value) / 100;
  };

  useEventListener("ended", nextSong,audio);

  const data = {
    playing,
    handleplay,
    handleVolumne,
    dataSong,
    songs,
    getSongs,
    nextSong,
    prevSong,
    playSong,
    getPlaylists,
    playlists,
    volumen,
    changePlaylist
  };

  return <AudioContext.Provider value={data}>{children}</AudioContext.Provider>;
};

export { DataAudioProvider };
export default AudioContext;
