import avatar from './image/avatar.jpg'

const ShowAvatar=({urlImagen,nombre,apellido}) =>{
    
var cadenaNombre=nombre
var firtLetterName=cadenaNombre.charAt(0)
var cadenaApellido=apellido
var firtLetterLastName=cadenaApellido.charAt(0)

const ImagenUrl = urlImagen === '' ?   avatar:firtLetterName+firtLetterLastName
    return(
<div style={{
    backgroundColor:'#8B8B8B',
    width:'400px',
    height:'400px',
    marginTop:'300px',
    marginLeft:'40%'
    
}}>
<img src={ImagenUrl} alt={ImagenUrl} style={{
    borderRadius:'50%',
    width:'300px',
    height:'300px',
   marginTop:'50px',
   marginLeft:'50px'
}} />

</div>
    );

}
// const NameInitialsAvatar=({nombre,apellido})=>{



// }
export {
    ShowAvatar
    // NameInitialsAvatar
    
}