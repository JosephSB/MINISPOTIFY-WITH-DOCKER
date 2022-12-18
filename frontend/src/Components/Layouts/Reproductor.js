import {useContext} from 'react';
import AudioContext from '../../Context/AudioContext'
import useEventListener from '../../Hooks/useEventListener';

const Reproductor = () =>{
    const {playing,handleplay,handleVolumne, dataSong,nextSong,volumen,prevSong} = useContext(AudioContext);
    const {ImgPortada,NameSong} = dataSong;

    useEventListener("keydown",(e)=>{
        if(e.keyCode === 32 && NameSong.length !== 0) handleplay();
    });

    return (
        <div className="Reproductor">
            <div className="Reproductor_Portada">
                <img className="Reproductor_ImgPortada" src={ImgPortada} alt={NameSong} />
                <p className="Reproductor_letter">{NameSong}</p>
            </div>
            <div className="Reproductor_Controles">
                <div className="Reproductor_Botones">
                    <i className="fas fa-backward icon" onClick={prevSong}></i>
                    <i className={`fas ${playing ? "fa-pause-circle icon" : "fa-play-circle icon"} fa-2x`}
                    onClick={handleplay}
                    ></i>
                    <i className="fas fa-forward icon" onClick={nextSong}></i>
                </div>
                <div className="Reproductor_progressBarPlayback"></div>
            </div>
            <div className="Reproductor_Volumen">
                <i className="fas fa-volume-up icon"></i>
                <input 
                className="Reproductor_Input" 
                type="range" min="0" max="100" value={volumen} 
                onChange={handleVolumne} ></input>
            </div>
        </div>
    )
}

export default Reproductor