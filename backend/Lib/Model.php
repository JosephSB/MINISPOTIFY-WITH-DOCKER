<?php

    class Model{

        function __construct()
        {
            $this->db = new DB();
        }

        //FUNCIONES GLOBALES QUE SE VAN A USAR DESDE CUALQUIER CONTROLLER

        public function findUserbyId($userID)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'SELECT * FROM usuarios WHERE ID_USER = :userID'
                );
                $query->execute([
                    'userID'=>$userID
                ]);
                
                while($query->fetch()){
                    return true;
                }
                return false;
            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }
        public function findUserbyUsername($userName)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'SELECT * FROM usuarios WHERE USERNAME = :USERNAME'
                );
                $query->execute([
                    'USERNAME'=>$userName
                ]);
                
                while($query->fetch()){
                    return true;
                }
                return false;
            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }

    }

?>