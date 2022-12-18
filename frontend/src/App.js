import { DataAudioProvider } from './Context/AudioContext';
import { DataAuthProvider } from './Context/AuthContext';
import MainRouter from './Router/MainRouter';
/*---------------DRAG-AND-DROP----------------*/
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
/*--------------------------------------------*/
import './Scss/main.scss'

function App() {
  return (
    <div className="App">
      <DataAuthProvider>

        <DataAudioProvider>
          
          <DndProvider backend={HTML5Backend}>
            <MainRouter />
          </DndProvider>

        </DataAudioProvider>

      </DataAuthProvider>
    </div>
  );
}

export default App;
