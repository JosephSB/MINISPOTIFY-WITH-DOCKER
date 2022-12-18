<?php
    require './Helpers/validateFiles.php';
    
    class Controller{

        function __construct()
        {
            $this->view = new View();
        }

        function loadModel($model){
            $url = 'Model/'.$model.'Model.php';

            if(file_exists($url)){
                require $url;
                $modelName = $model.'Model';
                $this->model = new $modelName();
            }
        }

        
        /*---------FUNCIONES DE AYUDA--------------*/

        public function generarJson($query)
        {
            $data = array();
            while($row = $query->fetch(PDO::FETCH_ASSOC)){
                $item = array(
                    'USERNAME' => $row['USERNAME'],
                    'IDSONG' => $row['ID_SONG'],
                    'SONGNAME' => $row['SONGNAME'],
                    'GENDER' => $row['GENDER'],
                    'URLPORTADA' => $row['URL_PORTADA'],
                    'URL_AUDIO' => $row['URL_AUDIO'],
                    'DATEUPLOAD' => $row['DATE_UPLOAD']
                );
                array_push($data, $item);
            }
            return $data;
        }

                
        public function sendJson($data, $operation)
        {
            return json_encode(
                array(
                    'status' => 200, 
                    'operation'=> $operation, 
                    'data' => $data
                ));
        }

        /*---------FUNCIONES QUE GUARDAN LOS FILES--------------*/

        public function saveMusic($fileSONG,$name)
        {
            $directorio = "Uploads/Musics/";
            $archivo = $directorio . basename($fileSONG["name"]);

            $validate = new ValidateFiles();

            if($validate->testAUD($fileSONG)){
                if(move_uploaded_file($fileSONG["tmp_name"], $archivo)){
                    rename ($archivo, $directorio.$name.'.mp3');
                    return true;
                }else return false;
            }else return false;

            
        }

        public function saveImg($fileIMG,$name)
        {
            $directorio = "Uploads/Img/";
            $archivo = $directorio . basename($fileIMG["name"]);

            $validate = new ValidateFiles();

            if($validate->testIMG($fileIMG)){
                if(move_uploaded_file($fileIMG["tmp_name"], $archivo)){
                    $type = explode("/",$fileIMG['type'])[1];
                    rename ($archivo, $directorio.$name.".".$type);
                    return true;
                }else return false;
            }else return false;
        }

    }

?>