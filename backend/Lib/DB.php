<?php
    class DB {
        private $Host;
        private $db;
        private $username;
        private $password;
        private $charset;

        public function __construct()
        {
            $this->Host = constant('HOST');
            $this->db = constant('DB');
            $this->username = constant('USER');
            $this->password = constant('PASSWORD');
            $this->charset = constant('CHARSET');
        }

        public function Connect()
        {
            try {
                $conexion = 'mysql:host='.$this->Host.';dbname='.$this->db.';charset='.$this->charset;

                //PDO CONFIG
                $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                            PDO::ATTR_EMULATE_PREPARES => false];
    
                // PDO OBJECT               
                $pdo = new PDO($conexion,$this->username, $this->password,$options);
                return $pdo;
            } catch (PDOException $err) {
                print_r("Error al conectarnos a la base de datos: " . $err->getMessage());
            }

        }

    }

?>