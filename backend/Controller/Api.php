<?php 

    class Api extends Controller{
        function __construct(){
            parent::__construct();
        }

        function render(){
            $this->view->Render('Api/Index');
        }

        public function usuarios($params){
            require_once 'Usuarios.php';
            $controler = new Usuarios();
            $controler->loadModel('usuarios');
            $controler-> {$params[0]}();
        }

        public function music($params){
            require_once 'Music.php';
            $controler = new Music();
            $controler->loadModel('music');

            //obtener solo el num del parametro
            $page = isset($params[1]) 
                        ? explode('=',rtrim($params[1],' '))[1] 
                        : "1";

            $controler-> {$params[0]}($page);
        }

        public function playlist($params)
        {
            require_once 'Playlists.php';
            $controler = new Playlist();
            $controler->loadModel('Playlists');
            $controler-> {$params[0]}();
        }

    }

?>