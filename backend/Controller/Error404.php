<?php

    class Error404 extends Controller{

        function __construct()
        {
            parent::__construct();
            $this->view->err = 'Error al Cargar el Recurso';
            $this->view->Render('Error/index');
        }
    }

?>