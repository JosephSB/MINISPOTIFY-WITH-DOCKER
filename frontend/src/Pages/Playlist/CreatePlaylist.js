import { useContext, useRef, useState } from "react";
import Alert from "../../Components/Modals/Alert";
import AudioContext from "../../Context/AudioContext";
import useFormData from "../../Hooks/useFormData";

const CreatePlaylist = () =>{
    const form = useRef(null);
    const [fileIMG, setFileIMG] = useState([]);
    const [sendForm,message,operation] = useFormData();
    const {getPlaylists } = useContext(AudioContext);

    const SubirIMG = (e) => setFileIMG(e.target.files);

    const changeForm = (e) =>{
        e.preventDefault()
        
        let url = process.env.REACT_APP_API_KEY_URL + 'playlist/newPlaylist';
        sendForm(form.current, url, getPlaylists);
    }

    return(
        <div className="Container Playlist">
            {operation && <Alert/>}
            <h1 className="Playlist_Title">Crea tu Playlist</h1>
            <p className="Auth_SpanError">{message}</p>
            <form className="Playlist_Form" ref={form}>
                <label className="Playlist_UploadPortada">
                    <span className="Playlist_SpanPortada">

                        {fileIMG.length > 0 
                        ? <p className="Playlist_TextFile">{fileIMG[0].name}</p>
                        : 
                        <>
                            <i className="fas fa-pen fa-4x"></i>
                            <p className="Playlist_TextFile">Elegir Portada</p>
                        </>
                        }
                    </span>
                    <input className="Playlist_InputFile" onChange={SubirIMG} type="file" name="file_Portada"/>
                </label>
                <div className="Playlist_Descriptions">
                    <input className="Playlist_Input" name="NamePlaylist" type="text" placeholder="Nombre:" />
                    <textarea className="Playlist_TextArea" name="Descripcion" placeholder="Descripcion:" />
                    <button className="Btn1" onClick={changeForm}>
                        Crear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePlaylist