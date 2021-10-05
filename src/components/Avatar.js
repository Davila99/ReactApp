import avatar from "./image/avatar.jpg";

const ShowAvatar = ({ urlImagen, nombre, apellido }) => {
  let cadenaNombre = nombre;
  let firtLetterName = cadenaNombre.charAt(0);
  let cadenaApellido = apellido;
  let firtLetterLastName = cadenaApellido.charAt(0);
  let concatenar = firtLetterName + " " + firtLetterLastName;

  const ImagenUrl =
    urlImagen === "" && nombre === "" && apellido === "" ? avatar : urlImagen;
  const Concatenacion = urlImagen === "" ? concatenar : concatenar;
  //console.log(Concatenacion)
  return (
    <div
      style={{
        backgroundColor: "#8B8B8B",
        width: "400px",
        height: "400px",
        marginTop: "100px",
        marginLeft: "40%",
      }}
    >
      <div>
        <img
          src={ImagenUrl}
          alt=""
          style={{
            borderRadius: "50%",
            width: "300px",
            height: "300px",
            marginTop: "50px",
            marginLeft: "50px",
          }}
        />
        <h1
          style={{
            marginTop: "-180px",
            marginLeft: "35%",
            color: "blue",
            fontSize: "500%",
          }}
        >
          {Concatenacion}
        </h1>
      </div>
    </div>
  );
};

export { ShowAvatar };
