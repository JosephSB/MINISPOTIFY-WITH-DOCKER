const BtnUpload = ({file, action,name,message}) =>{
    return (
        <label className="BtnUpload">
            <i className="fas fa-cloud-upload-alt"></i>
            &nbsp; {file.length > 0 ? file[0].name : `${message}`}
            <input className="BtnUpload-InputFile" onChange={action} type="file" name={name}/>
        </label>
    )
}

export default BtnUpload