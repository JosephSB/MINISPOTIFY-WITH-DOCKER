import { useNavigate } from 'react-router-dom';

const Alert = () =>{
    let navigate = useNavigate();

    return (
        <div className="DifuminadoModal">
            <div className="Modal aparecer">
                <i class="fas fa-check-circle fa-6x"></i>
                <p className="Modal_Text">Cancion Subida Correctamente</p>
                <button className="Btn2" onClick={()=>navigate("/")}>
                    <i className="fas fa-arrow-left"></i>
                    &nbsp;
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default Alert