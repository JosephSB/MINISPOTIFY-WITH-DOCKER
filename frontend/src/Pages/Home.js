import {useState,useEffect, useContext} from 'react';
import SongCard from '../Components/Cards/SongCard'
import Loader from '../Components/Loaders/Loader';
import AudioContext from '../Context/AudioContext';


const Home = () =>{
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);
    const {getSongs,songs} = useContext(AudioContext);
    

    useEffect(() => {
        setLoader(true);
        if(getSongs(page)) setLoader(false);
    }, []);

    return (
        <div className="Container">
            <p className="title">Hola &#128526;!</p>
            <div className="contentSongs">
                {loader && <Loader message="Cargando Canciones"/>}
                {
                songs.length > 0 
                ? songs.map((song,index) => <SongCard key={index} {...song} index={index} />)
                : <p>No hay canciones</p>
                }
            </div>
        </div>
    )
}

export default Home