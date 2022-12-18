import {useState} from 'react';
import { helpHttp } from '../../Helpers/helpHttp'
import { NavLink } from 'react-router-dom';

const formDefault = {
    Username: "",
    Password: ""
}

const Login = () =>{
    const [form, setForm] = useState(formDefault);
    const [messageError, setMessageError] = useState("");

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        let options = {
            body: form
        }
        let url = process.env.REACT_APP_API_KEY_URL+'usuarios/ValidateUser'

        helpHttp().post(url,options).then(res => {
            if(res.operation){
                window.sessionStorage.setItem('token', res.data.Token);
                window.location.href = "/"
            }else setMessageError(res.data)
        })
    }


    return (
        <div className="Container Auth">
            <h1 className="Auth_Tittle">Login</h1>
            <p className="Auth_SpanError">{messageError}</p>
            <form className="Auth_Form" onSubmit={handleSubmit}>
                <input className="Auth_input" type="text" 
                onChange={handleChange} placeholder="Username"
                name="Username" />
                <input className="Auth_input" type="password" 
                onChange={handleChange} placeholder="password"
                name="Password" suggested= "current-password"/>
                <button className="Btn1" onClick={handleSubmit}>
                    Inicia Sesion
                </button>
                <br/>
                <NavLink
                className="Auth_span"
                exact="true" to="/Register"
                activeclassname="active"
                >
                    ¿No tienes cuenta?, ¡Registrate!
                </NavLink>
            </form>
        </div>
    )
}

export default Login

/*
               <Btn1 name={"Inicia Sesion"} action={handleSubmit} />
                <br/>
                <Link href="/Auth/Register">
                    <span className="span">¿No tienes cuenta?, ¡Registrate!</span>
                </Link>*/