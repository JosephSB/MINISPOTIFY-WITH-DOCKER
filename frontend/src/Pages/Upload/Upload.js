import {useRef,useState} from 'react';
import BtnUpload from '../../Components/Items/BtnUpload';
import Alert from '../../Components/Modals/Alert';
import useFormData from '../../Hooks/useFormData';


const Upload = () =>{
    const [fileAUD, setFileAUD] = useState([]);
    const [fileIMG, setFileIMG] = useState([]);
    const [sendForm,message,operation] = useFormData()
    const formD = useRef(null);

    const SubirIMG = (e) => setFileIMG(e.target.files);
    const SubirAUD = (e) => setFileAUD(e.target.files);

    const changeForm = async(e) =>{
        e.preventDefault()
        
        let url = process.env.REACT_APP_API_KEY_URL + 'music/Upload';
        sendForm(formD.current, url);
    }

    return (
        <div className="Container Auth">
            {operation && <Alert/>}
            <h1 className="Auth_Tittle">Upload Song</h1>
            <p className="Auth_SpanError">{message}</p>
            <form className="Auth_Form" ref={formD}>
                <input className="Auth_input"
                type="text" name="songname" 
                placeholder="Nombre de Cancion:"
                />
                <input className="Auth_input"
                type="text" name="gender" 
                placeholder="Genero:"
                />
                <BtnUpload key="1" file={fileIMG} action={SubirIMG} name="file_img" message="Subir Portada" />
                <BtnUpload key="2" file={fileAUD} action={SubirAUD} name="file_song" message="Subir Audio" />

                <input className="Auth_input"
                type="date" name="date_premiere"
                />
                <button className="Btn1" onClick={changeForm}>
                    Upload
                </button>
            </form>
        </div>
    )
}

export default Upload