const ShowAlert = ({ altura, ancho, colorFondo, colorTexto, texto }) => {
  return (
    <div>
      <div
        style={{
          height: altura,
          width: ancho,
          background: colorFondo,
          color: colorTexto,
          borderRadius: "3px",
          marginTop: "20px",
          marginLeft: "35%",
        }}
      >
        <h3
          style={{
            marginLeft: "5%",
            padding: "15px",
          }}
        >
          {texto}
        </h3>
      </div>
      <br />
    </div>
  );
};

export { ShowAlert };
