# BACKEND: API MINI SPOTIFY

## INSTALACION Y CONFIGURACION

- Crea un servidor local (yo use xammp)
- Importa a mysql la bd _minispotiffy.sql_
- Ve a la carpeta _Config_ y agrega tus configuraciones de bd y url
- Enciende tu servidor y listo ya tienes la api

## INFORMACION

Una api pequeña que envia y recibe canciones, crea playlist y logea usuarios.
algunas mejoras que se agregaran proximamente seran: 
- Que en las playlist no se repitan canciones
- Mejorar logeo con token
- Empezar a crear la api para consultar y agregar Follows
- Agregar Buscador de canciones y playlist
- Una ves listo los follows agregar la lista de canciones favoritas
- Agregar para que no puedas agregar canciones a una playlist que no es tuya

## CONSULTAS
Puedes poner tus propias configuraciones en el archivo _Config/config.php_
_[ HOST ]: http://localhost/Spotify_

### 1. USUARIOS

#### POST:
```
    ADD-USUARIO:[ HOST ]/API/usuarios/adduser
    
    ENTRADA:
        {
            "Username": [ STRING ],
            "Password": [ STRING ],
            "Email": [ STRING ],
            "Name": [ STRING ],
            "LastName": [ STRING ]
        }


```
```
    VALIDAR-USUARIO:[ HOST ]/API/usuarios/ValidateUser
    
    ENTRADA:
        {
            "Username": [ STRING ],
            "Password": [ STRING ]
        }
```

```
    VALIDAR-TOKEN:[ HOST ]/API/usuarios/validarToken
    
    ENTRADA:
        {
            "Token": [ STRING ]
        }
```

```
    GET-DATA-BY-USER:[ HOST ]/API/usuarios/allInfoUsuario
    
    ENTRADA:
        {
            "UserID": [ STRING ],
            "Page": [ INT ]
        }
```

### 2.  SONGS
####    POST:
```
        UPLOAD-SOUND: [ HOST ]/API/music/Upload
        
        ENTRADA:
        FORMDATA, GUIARSE DEL FORM.HTML
```
```
        GET-SOUNDS BY GENDER: [ HOST ]/API/music/getSongsbyGender
        
        ENTRADA:
        {
            "Gender": [STRING],
            "Pagina": [INT]
        }
```
####    GET:
```
        GET-SONGS: [ HOST ]/API/music/getSongs/page=[ pagina ]
```
### 3.  PLAYLISTS
####    POST:
```
    CREATE-PLAYLIST: [ HOST ]/API/playlist/newPlaylist

    ENTRADA:
    {
    "IDusuario": [STRING],
    "NamePlaylist": [STRING],
    "URL_Portada": [STRING],
    "Descripcion": [STRING]
    }
```
```
    ADD SONG IN PLAYLIST: [ HOST ]/API/playlist/addSongPlalist
    
    ENTRADA:
    {
        "IDsong":[STRING],
        "IDplaylist": [STRING]
    }
```
```
    GET PLAYLIST BY USER: [ HOST ]/API/playlist/getPlaylist
    
    ENTRADA:
    {
        "userID":[STRING]
    }
```
```
    GET SONGS BY PLAYLIST: [ HOST ]/API/playlist/getSongsByPlaylist
    
    ENTRADA:
    {
        "playlistID":[STRING]
    }
```


