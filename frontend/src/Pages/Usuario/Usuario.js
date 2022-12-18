import {useContext, useEffect,useState} from 'react';
import { helpHttp } from '../../Helpers/helpHttp'
import AuthContext from '../../Context/AuthContext';
import { useParams } from 'react-router-dom';
import SongCard from '../../Components/Cards/SongCard';
import Loader from '../../Components/Loaders/Loader';

const dataDefault = {
    UserID: "",
    Username: "",
    Name: "",
    Email: "",
    songs: []
}

const Usuario = () =>{
    const [data, setData] = useState(dataDefault);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);
    let { id } = useParams();

    const {removeToken} = useContext(AuthContext);

    useEffect(() => {
        setLoader(true);
        let options = {
            body: {
                UserID: "#"+id,
                Page: page
            }
        }
        let url = process.env.REACT_APP_API_KEY_URL+'usuarios/allInfoUsuario';

        helpHttp().post(url,options).then(res => {
            if(res.operation){
                setData(res.data);
                setLoader(false);
            }
        })
    }, [id]);

    const SignOut = (e) =>{
        removeToken()
        window.location.href = "/"
    }


    return(
        <div className="Container Usuario">
            <div className="Usuario_ContentUser">
                <i className="fas fa-user-circle fa-6x"></i>
                <div>
                    <p className="Usuario_Text"><strong>{data.Username}</strong></p>
                    <p className="Usuario_Text2">
                        Name:&nbsp; 
                        <strong>{data.Name}</strong>
                    </p>
                    <p className="Usuario_Text2">
                        Email:&nbsp; 
                        <strong>{data.Email}</strong>
                    </p>
                </div>
                <span className="Usuario_BtnExit" onClick={SignOut}>
                    <i className="fas fa-sign-out-alt"></i>
                    Salir
                </span>
            </div> 
            <div className="Usuario_Sections">
                <section className="Usuario_SectionSongs">
                    {loader && <Loader message="Cargando Canciones"/>}
                    {data.songs.length > 0
                        ? data.songs.map(song => <SongCard key={song.IDSONG} {...song} />)
                        : <p className="Usuario_Text2">No hay Canciones subidad por esta persona</p>
                    
                    }
                </section>
                <section className="Usuario_SectionPlaylist">
                    <p className="Usuario_Text2">No hay playlist subidad por esta persona</p>
                </section>
            </div>
        </div>
    )
}


export default Usuario