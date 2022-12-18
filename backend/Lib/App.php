<?php

    class App{
        function __construct()
        {
            $url = isset($_GET['url'])? $_GET['url']: null;

            $url = rtrim($url,'/');
            $url = explode('/',$url);

            if(empty($url[0])){
                require_once 'Controller/Api.php';

                $Controler = new Api();
                //$Controler->loadModel('main');
                $Controler->Render();
                return false;
            }

            $archivoController = 'Controller/'.$url[0].'.php';

            
            if(file_exists($archivoController)){
                require_once $archivoController;

                $Controler = new $url[0];
                //$Controler->loadModel($url[0]);

                $nparam = sizeof($url);

                if($nparam>1){  
                    if($nparam>2){
                        $param = [];
                        for($i = 2; $i < $nparam; $i++){
                            array_push($param, $url[$i]);
                        }
                        $Controler->{$url[1]}($param);
                    }else{
                        // solo se llama al método
                        $Controler->{$url[1]}();
                    }
                }else{
                    $Controler->render(); 
                }

            }else{
                $Controler = new Error404();
            }

        }

    }
    
?>