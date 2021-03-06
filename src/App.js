import { ShowAlert } from "./components/Alerts";
import {ShowAvatar} from "./components/Avatar"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShowAlert altura="50px" ancho="600px" colorFondo="green" colorTexto="white" texto="Success!"></ShowAlert>
        <ShowAlert altura="50px" ancho="600px" colorFondo="red" colorTexto="white" texto="Danger!!!"></ShowAlert>

        <ShowAvatar urlImagen="https://i.pinimg.com/originals/64/40/2f/64402f6d6b0d3d0d6fccd7fa49cba0f3.jpg"nombre="" apellido=""></ShowAvatar>
        
      </header>
    </div>
  ); 
}

export default App;