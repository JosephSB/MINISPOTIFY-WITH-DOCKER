<?php

    class Validate{
        private $rgxUsuario;
        private $rgxPassword;
        private $rgxEmail;

        public function __construct(){
            $this->rgxUsuario = '/^[0-9a-zA-Z_]{5,}$/';
            $this->rgxPassword = '/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/';
            $this->rgxEmail = '#^(((([a-z\d][\.\-\+_]?)*)[a-z0-9])+)\@(((([a-z\d][\.\-_]?){0,62})[a-z\d])+)\.([a-z\d]{2,6})$#i';
        }

        public function validateUser($user){
            return preg_match($this->rgxUsuario, $user); 
        }

        public function validatePass($pass){
            return preg_match($this->rgxPassword, $pass); 
        }

        public function validateEmail($email){
            return preg_match($this->rgxEmail, $email); 
        }


    }
    

?>