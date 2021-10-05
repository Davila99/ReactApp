import avatar from './image/avatar.jpg'


const ShowAvatar = ({ urlImagen, nombre, apellido }) => {

    var cadenaNombre = nombre
    var firtLetterName = cadenaNombre.charAt(0)
    var cadenaApellido = apellido
    var firtLetterLastName = cadenaApellido.charAt(0)
    var concatenar = firtLetterName + " " + firtLetterLastName

    const ImagenUrl = urlImagen === '' && nombre === '' && apellido=== '' ? avatar : urlImagen
    const Validar = ImagenUrl === ''  ? concatenar : concatenar
    console.log(Validar)
    return (
        <div style={{
            backgroundColor: '#8B8B8B',
            width: '400px',
            height: '400px',
            marginTop: '300px',
            marginLeft: '40%'

        }}>

            <div>
                <img src={ImagenUrl} alt='' style={{
                    borderRadius: '50%',
                    width: '300px',
                    height: '300px',
                    marginTop: '50px',
                    marginLeft: '50px'
                }} />
                <h1 style={{
                     marginTop: '-180px',
                     marginLeft: '35%',
                     color: 'blue',
                     fontSize: '500%'
                }}>{Validar}</h1>
            </div>



        </div>
    );



}


export {
    ShowAvatar,

}