<?php

    class View{
        function Render($NameView){
            require 'View/'.$NameView.'.php';
        }
    }

?>