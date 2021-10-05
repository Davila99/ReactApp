import { ShowAlert } from "./components/Alerts";
import {ShowAvatar} from "./components/Avatar"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShowAvatar urlImagen="https://i.pinimg.com/originals/64/40/2f/64402f6d6b0d3d0d6fccd7fa49cba0f3.jpg"nombre="Eliseo" apellido="Davila"></ShowAvatar>
        {/* <ShowAlert altura="50px" ancho="600px" colorFondo="green" colorTexto="white" texto="Exitoso"></ShowAlert>
        <ShowAlert altura="50px" ancho="600px" colorFondo="red" colorTexto="white" texto="Alert malo"></ShowAlert> */}
      </header>
    </div>
  ); 
}

export default App;