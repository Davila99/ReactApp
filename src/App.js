import { ShowAlert } from "./components/Alerts";
import {ShowAvatar,ShowAvatarImage} from "./components/Avatar"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShowAlert altura="50px" ancho="600px" colorFondo="green" colorTexto="white" texto="Exitoso"></ShowAlert>
        <ShowAlert altura="50px" ancho="600px" colorFondo="red" colorTexto="white" texto="Alert malo"></ShowAlert>

        
        <ShowAvatar urlImagen=""nombre="" apellido=""></ShowAvatar>
        
      </header>
    </div>
  ); 
}

export default App;