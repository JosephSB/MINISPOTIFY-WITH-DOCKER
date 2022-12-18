import {useContext} from 'react';
import AudioContext from '../../Context/AudioContext';
/*---------------DRAG-AND-DROP----------------*/
import { useDrag  } from "react-dnd";
/*--------------------------------------------*/

const SongCard = ({SONGNAME,URLPORTADA,USERNAME,GENDER,URL_AUDIO,IDSONG,index}) =>{
    const {playSong} = useContext(AudioContext);

    const handleClick = () => playSong(URLPORTADA,SONGNAME,URL_AUDIO,index);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "SongCard",
        item: { id: IDSONG },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
    }));

    return(
        <div 
        ref={drag}
        className="cardSong" 
        onClick={handleClick}
        >
            <img className="cardSong__ImgPortada" src={ URLPORTADA } alt={SONGNAME} />
            <div>
                <p><strong>{ SONGNAME }</strong></p>
                <p>
                    <strong>upload by:</strong>
                    &nbsp;
                    { USERNAME }
                </p>
            </div>
            <p className="cardSong__Span">{ GENDER }</p>
            <span>
                <i className="fas fa-star cardSong__Icon"></i>
            </span> 
        </div>
    )
}


/*

        <Draggable  key={IDSONG} draggableId={IDSONG} index={index}>
            {(draggableProvided) => (  
                <div 
                {...draggableProvided.draggableProps}
                ref={draggableProvided.innerRef}
                {...draggableProvided.dragHandleProps}
                className="cardSong" 
                onClick={handleClick}
                >
                    
                </div>
            )}
        </Draggable>
*/
/*
                <div 
                className="cardSong" 
                onClick={handleClick}
                >
                    <img className="cardSong__ImgPortada" src={ URLPORTADA } alt={SONGNAME} />
                    <div>
                        <p><strong>{ SONGNAME }</strong></p>
                        <p>
                            <strong>upload by:</strong>
                            &nbsp;
                            { USERNAME }
                        </p>
                    </div>
                    <p className="cardSong__Span">{ GENDER }</p>
                    <span>
                        <i className="fas fa-star cardSong__Icon"></i>
                    </span> 
                </div>
*/

export default SongCard