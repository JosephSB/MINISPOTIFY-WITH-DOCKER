import { NavLink } from 'react-router-dom';
import { helpHttp } from '../../Helpers/helpHttp';
/*---------------DRAG-AND-DROP----------------*/
import { useDrop } from "react-dnd";
/*--------------------------------------------*/

const ItemPlaylist = ({NAME,ID_PLAYLIST}) =>{

    const AddSongInPlaylist = async(idSong) =>{
        console.log(idSong, "playlist: ", ID_PLAYLIST)
        let options = {
            body: {
                IDsong : idSong,
                IDplaylist : ID_PLAYLIST
            }
        }
        let url = process.env.REACT_APP_API_KEY_URL+'playlist/addSongPlalist'
    
        helpHttp().post(url,options).then(res => {
            if(res.operation) console.log(res.data)
        })
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "SongCard",
        drop: (item) => AddSongInPlaylist(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
    }));
    return (
        <NavLink 
        className="Aside_Link"
        exact="true" to={`/Playlist/${ID_PLAYLIST}`}
        activeclassname="active"
        ref={drop}
        >
            {NAME}
        </NavLink>
    )
}

export default ItemPlaylist