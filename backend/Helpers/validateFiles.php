<?php

    class ValidateFiles{

        public function testAUD($dataAUD)
        {
            if(!empty($dataAUD["tmp_name"])){
                if($dataAUD['type'] == 'audio/mpeg'){
                    $MB = ($dataAUD['size']/1000)/1000;
                    if($MB <= 10) return true;
                    else return false;
                }else return false;
            }else return false;
        }

        public function testIMG($dataIMG)
        {
            if(!empty($dataIMG["tmp_name"])){
                if($dataIMG['type'] == 'image/jpeg' || $dataIMG['type'] == 'image/jpg'){
                    $MB = ($dataIMG['size']/1000)/1000;
                    if($MB <= 5) return true;
                    else return false;
                }else return false;
            }else return false;
        }

    }


?>