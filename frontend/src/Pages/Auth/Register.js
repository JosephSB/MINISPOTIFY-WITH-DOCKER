import {useState} from 'react';
import { NavLink,useNavigate} from 'react-router-dom';
import { helpHttp } from '../../Helpers/helpHttp'

const formDefault = {
    Username: "",
    Password: "",
    Email: "",
    Name: "",
    LastName: ""
}

const Register = () =>{
    const [form, setForm] = useState(formDefault);
    const [messageError, setMessageError] = useState("");
    let navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        let options = {
            body: form
        }
        let url = process.env.REACT_APP_API_KEY_URL+'usuarios/adduser';

        if(form.Name.length > 3 && form.LastName.length > 3){
            helpHttp().post(url,options).then(res => {
                if(res.operation) navigate("/Login");
                else setMessageError(res.data)
            })
        }else setMessageError("Ingrese sus nombres")
    }
    
    return(
        <div className="Container Auth">
            <h1 className="Auth_Tittle">Register</h1>
            <p className="Auth_SpanError">{messageError}</p>
            <form className="Auth_Form" onSubmit={handleSubmit}>
                <input className="Auth_input" type="text" 
                onChange={handleChange}
                name="Username" placeholder="Username"
                />
                <input className="Auth_input" type="text" 
                onChange={handleChange}
                name="Name" placeholder="Name"
                />
                <input className="Auth_input" type="text" 
                onChange={handleChange}
                name="LastName" placeholder="LastName"
                />
                <input className="Auth_input" type="email" 
                onChange={handleChange}
                name="Email" placeholder="Email"
                />
                <input className="Auth_input" type="password" 
                onChange={handleChange} placeholder="Password"
                name="Password" suggested= "current-password"
                />
                <button className="Btn1" onClick={handleSubmit}>
                    Registrar
                </button>
                <br/>
                <NavLink
                className="Auth_span"
                exact="true" to="/Login"
                activeclassname="active"
                >
                    ¿Ya tienes cuenta?, Incia Sesion!
                </NavLink>
            </form>
        </div>
    )
}

export default Register