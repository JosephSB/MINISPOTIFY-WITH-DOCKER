<?php
    require './Helpers/validate.php';

    class Usuarios extends Controller{
        function __construct(){
            parent::__construct();
        }

        public function AddUser()
        {
            $data = json_decode(file_get_contents('php://input'), true);

            $validate = new Validate();

            if(count($data) == 5){
                if($validate -> validateUser($data['Username']) &&
                $validate -> validatePass($data['Password'])&&
                $validate -> validateEmail($data['Email'])
                ){
                    if(!$this->model->findUserbyUsername($data['Username'])){

                        if($this->model->add($data)){
                            echo $this->sendJson('Usuario Añadido Correctamente', true);
                        }else echo $this->sendJson('No se puedo Anadir al usuario', false);
                        
                    }else echo $this->sendJson('El username ya existe', false);

                }
                else echo $this->sendJson('Los datos que envio son invalidos', false);
            }else{
                echo $this->sendJson('Los datos estan incompletos', false);
            }
        
        }

        public function ValidateUser()
        {
            $data = json_decode(file_get_contents('php://input'), true);
            if(isset($data['Username']) && isset($data['Password'])){

                if($this->model->findUser($data['Username'],$data['Password'])){

                    $idUser = $this->model->getUserId();

                    if($this->model->generarToken($idUser)){
                        $data = $this->model->getDataUser();
                        echo $this->sendJson($data, true);
                    }else echo $this->sendJson('Problemas al generar el token', false);
                    
                }else  echo $this->sendJson('No se pudo encontrar al usuario', false);

            }else echo $this->sendJson('No se envio parametros', false);
        }

        public function validarToken()
        {
            $data = json_decode(file_get_contents('php://input'), true);

            if(isset($data['Token'])){

                if($this->model->searchToken($data['Token'])){
                    $data = $this->model->getDataUser();
                    echo $this->sendJson($data, true);
                }else echo $this->sendJson('No se encontro el token', false);

            }else echo $this->sendJson('No se envio el token', false);
        }

        public function allInfoUsuario()
        {
            $data = json_decode(file_get_contents('php://input'), true);
            if(count($data) == 2 && !empty($data['UserID']) && !empty($data['Page'])){

                if($this->model->getdataByUser($data['UserID'])){
                   
                    $dataUser = $this->model->getDataUser();
                    $query = $this->model->getSongsByUser($data['UserID'], $data['Page'] );

                    $dataUser['songs'] = $this->generarJson($query);

                    echo $this->sendJson($dataUser, true);

                }else echo $this->sendJson('El id es incorrecto', false);

            }else echo $this->sendJson('Parametros incompletos', false);

        }



    }

?>