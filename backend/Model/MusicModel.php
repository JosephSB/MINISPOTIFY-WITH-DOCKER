<?php

    class MusicModel extends Model{
        function __construct(){
            parent::__construct();
        }

        public function addSong($data,$type,$id)
        {
            try {
                $query = $this->db->connect()->prepare(
                    "INSERT INTO song VALUES (:idSong,:songname,:gender,:url_portada,:url_aud,CURRENT_TIME(),:datePremiere)"
                );
                $urlSong= constant('URL')."/Uploads/Musics/".$id.".mp3";
                $urlImg= constant('URL')."/Uploads/Img/".$id.".".$type;

                $query->execute([
                    'idSong'=>$id,//generar id
                    'songname'=>$data['songname'],
                    'gender'=> $data['gender'],
                    'url_portada' => $urlImg,
                    'url_aud' =>$urlSong,
                    'datePremiere' => $data['date_premiere']
                ]);

                $this->addAutorSong($data['id_user'],$id);
                return true;

            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }


        public function addAutorSong($idAutor,$idSong)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'INSERT INTO usuarios_song VALUES (:idSong,:iduser)'
                );

                $query->execute([
                    'idSong'=>$idSong,//generar id
                    'iduser'=>$idAutor
                ]);
                return true;
            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }

        public function getSongs($page)
        {
            try {
                $query = $this->db->connect()->prepare(
                    "SELECT u.USERNAME, s.ID_SONG, s.SONGNAME,s.GENDER,s.URL_PORTADA,s.URL_AUDIO,s.DATE_UPLOAD 
                    FROM song s 
                    inner join usuarios_song us on(s.ID_SONG = us.ID_SONG) 
                    inner join usuarios u on(u.ID_USER = us.ID_USER)
                    limit 10  OFFSET :page"
                );

                $numero = (intval($page)-1)*10;
                $query->execute(['page'=>$numero]);
                
                return $query;
            } catch (PDOException $e) {
                echo $e;
                return [];
            }
        }

        public function getSongsByGender($data)
        {
            try{
                $query = $this->db->connect()->prepare(
                    "SELECT u.USERNAME, s.ID_SONG, s.SONGNAME,s.GENDER,s.URL_PORTADA,s.URL_AUDIO,s.DATE_UPLOAD 
                    FROM song s 
                    inner join usuarios_song us on(s.ID_SONG = us.ID_SONG) 
                    inner join usuarios u on(u.ID_USER = us.ID_USER)
                    WHERE gender = :gender
                    limit 10 OFFSET :page"
                );

                $numeroPag = (intval($data['Pagina'])-1)*10;

                $query->execute(['page'=>$numeroPag, 'gender' => $data['Gender']]);

                return $query;
            }catch (PDOException $e){
                echo $e;
                return [];
            }
        }

    }

?>