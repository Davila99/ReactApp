const ShowAlert = ({altura,ancho,colorFondo,colorTexto, texto}) => {
  return (
      <div>
          <div style={{
              height: altura,
              width:ancho,
              background:colorFondo,
              color:colorTexto,
              borderRadius:'3px'
          }}>
              {texto}
          </div>
          <br />
          

      </div>

  )
}

export {
  ShowAlert
};