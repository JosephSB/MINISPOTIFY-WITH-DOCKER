import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";

const useFormData = () =>{
    const [message, setMessage] = useState();
    const [operation, setOperation] = useState(null);
    const {data} = useContext(AuthContext);
    const {UserID} = data;

    const sendForm = async(formD, url,call) =>{
        const fd = new FormData(formD);
        fd.set("id_user",UserID);

        fetch(url , { // Your POST endpoint
            method: 'POST',
            body: fd // This is your file object
        }).then( response => response.json() )
        .then(
            success => {
                if(success.operation) {
                    setOperation(true);
                    call(UserID);
                }
                else setMessage(success.data);
            }
        ).catch( error => setMessage(error) );
        
    }

    return [sendForm,message,operation];
}

export default useFormData