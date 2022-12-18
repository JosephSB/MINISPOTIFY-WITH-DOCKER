<?php

    class PlaylistsModel extends Model {
        function __construct(){
            parent::__construct();
        }

        public function addPlaylist($data,$type,$id)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'INSERT INTO playlist VALUES (:idPlaylist, :namePlaylist, :urlPortada,CURRENT_TIME(),:description)'
                );

                $urlImg= constant('URL')."/Uploads/Img/".$id.".".$type;

                $query->execute([
                    'idPlaylist'=>$id,//generar id
                    'namePlaylist'=>$data['NamePlaylist'],
                    'urlPortada' => $urlImg,
                    'description' => $data['Descripcion']
                ]);

                $this->addAutorPlaylist($data['id_user'],$id);
                return true;

            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }

        public function addSong_Playlist($data)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'INSERT INTO playlist_song VALUES (:idPlaylist, :idsong)'
                );

                $query->execute([
                    'idPlaylist'=>$data['IDplaylist'],//generar id
                    'idsong'=>$data['IDsong']
                ]);
                return true;

            } catch (PDOException $e) {
                //echo $e;
                return false;
            }
        }

        public function addAutorPlaylist($idautor,$idplaylist)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'INSERT INTO usuarios_playlist VALUES (:idplaylist,:iduser)'
                );

                $query->execute([
                    'idplaylist'=>$idplaylist,
                    'iduser'=>$idautor
                ]);
                return true;
            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }

        public function existSongID($idsong)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'SELECT ID_SONG,SONGNAME FROM song WHERE ID_SONG = :idsong'
                );

                $query->execute(['idsong'=>$idsong]);
                while($query->fetch()){
                    return true;
                }
                return false;
            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }

        public function existPlaylistID($idplaylist)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'SELECT ID_PLAYLIST FROM playlist WHERE ID_PLAYLIST = :idplaylist'
                );

                $query->execute(['idplaylist'=>$idplaylist]);
                while($query->fetch()){
                    return true;
                }
                return false;
            } catch (PDOException $e) {
                echo $e;
                return false;
            }
        }

        public function getPlaylistByUser($userID)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'SELECT p.ID_PLAYLIST,p.NAME,p.URL_PORTADA FROM usuarios_playlist Up 
                    INNER JOIN playlist p on(up.ID_PLAYLIST = p.ID_PLAYLIST)
                    WHERE ID_USER = :userID'
                );

                $query->execute(['userID'=>$userID]);
                return $query;
            } catch (PDOException $e) {
                echo $e;
                return [];
            }
        }

        public function detailPlaylist($playlistID)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'SELECT ID_PLAYLIST, NAME,URL_PORTADA,CREATION_DATE,DESCRIPTION FROM playlist 
                    WHERE ID_PLAYLIST = :playlistID'
                );

                $query->execute(['playlistID'=>$playlistID]);
                return $query;
            } catch (PDOException $e) {
                echo $e;
                return [];
            } 
        }

        public function findSongsByPlaylist($playlistID)
        {
            try {
                $query = $this->db->connect()->prepare(
                    'SELECT u.USERNAME,s.ID_SONG, s.SONGNAME,s.GENDER,s.URL_PORTADA,s.URL_AUDIO,s.DATE_UPLOAD FROM playlist_song ps
                    INNER JOIN SONG s on(ps.ID_SONG = s.ID_SONG)
                    INNER JOIN usuarios_song us on (us.ID_SONG = s.ID_SONG)
                    INNER JOIN usuarios u on (u.ID_USER = us.ID_USER)
                    WHERE ps.ID_PLAYLIST = :playlistID'
                );

                $query->execute(['playlistID'=>$playlistID]);
                return $query;
            } catch (PDOException $e) {
                echo $e;
                return [];
            }
        }

    }

?>