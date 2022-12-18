<?php


    class Playlist extends Controller{
        function __construct(){
            parent::__construct();
        }
        //agregando file portada 
        public function newPlaylist()
        {

            if( count($_POST) == 3 && count($_FILES) == 1 ){

                $fileIMG = $_FILES['file_Portada'];

                if($this->model->findUserbyId( $_POST['id_user'])){

                    
                    if(strlen(trim($_POST['NamePlaylist']))>=5)
                    {

                        //generar id
                        $id ="P".substr(uniqid(),3,8).substr($_POST['id_user'],2,2).substr(uniqid(),0,2);
                        
                        if($this->saveImg($fileIMG,$id)){

                            $type = explode("/",$fileIMG['type'])[1];
                            if($this->model->addPlaylist($_POST,$type,$id)) echo $this->sendJson('Playlist creada exitosamente', true);
                            else echo $this->sendJson('Ocurrio un error al crear la playlist', false);

                        }else echo $this->sendJson('error al guardar sus archivos, verifique que el tipo sea JPG o JPEG', false);
                    
                    }else echo $this->sendJson('El nombre de tu playlist tiene que ser mas de 5 digitos', false);
                    

                }else echo $this->sendJson('El usuario no existe', false);

            }else echo $this->sendJson('Datos Incompletos', false);
            
        }

        public function addSongPlalist()
        {
            $data = json_decode(file_get_contents('php://input'), true);

            if(count($data)==2){

                if($this->model->existSongID($data['IDsong'])&&
                $this->model->existPlaylistID($data['IDplaylist'])
                ){

                    if($this->model->addSong_Playlist($data)){
                        echo $this->sendJson('Cancion agregada correctamente', true);
                    }else echo $this->sendJson('Error al guardar la cancion', false);
                    
                }else  echo $this->sendJson('Los datos no existen', false);

            }else echo $this->sendJson('Datos Incompletos', false);
        }

        public function getPlaylist()
        {

            $data= json_decode(file_get_contents('php://input'), true);

            if($this->model->findUserbyId($data['userID'])){
                $query = $this->model->getPlaylistByUser($data['userID']);
                $data = array();
                while($row = $query->fetch(PDO::FETCH_ASSOC)){
                    $item = array(
                        'ID_PLAYLIST' => $row['ID_PLAYLIST'],
                        'NAME' => $row['NAME'],
                        'PORTADA' => $row['URL_PORTADA']
                    );
                    array_push($data, $item);
                }
                echo $this->sendJson( $data, true);

            }else echo $this->sendJson('El usuario no existe', false);
        }

        public function getSongsByPlaylist()
        {
            $data= json_decode(file_get_contents('php://input'), true);

            if($this->model->existPlaylistID($data['playlistID'])){

                $dataPlaylist = $this->model->detailPlaylist($data['playlistID']);
                $SongsPlaylist = $this->model->findSongsByPlaylist($data['playlistID']);
                
                $data = array();
                
                $row = $dataPlaylist->fetch(PDO::FETCH_ASSOC);

                $item = array(
                    'ID_PLAYLIST' => $row['ID_PLAYLIST'],
                    'NAME' => $row['NAME'],
                    'URL_PORTADA' => $row['URL_PORTADA'],
                    'CREATION_DATE' => $row['CREATION_DATE'],
                    'DESCRIPTION' => $row['DESCRIPTION'],
                    'SONGS' => $this->generarJson($SongsPlaylist)
                );
                array_push($data, $item);

                echo $this->sendJson($data, true);

            }else echo $this->sendJson('La playlist no existe', false);


        }

    }


?>