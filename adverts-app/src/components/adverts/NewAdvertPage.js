import Layout from "../Layout/Layout";

const NewAdvertPage = (props) => {
  return (
    <Layout title="Escribe tu anuncio." {...props}>
      <div>New Advert Page</div>
      <form>
        <br></br>
        <label>
          Nombre:
          <input type="text" placeholder="Introduce tu nombre."></input>
        </label>
        <br></br>
        <p>¿Es para compra o para venta?</p>
        <label>
          Compra:
          <input type="radio" name="compvent" value="compra" />
        </label>
        <label>
          Venta:
          <input type="radio" name="compvent" value="venta" />
        </label>
        <br></br>
        <br></br>
        {/* Para el select hay que asociar un estado */}
        <label>
          Selecciona tus tags:
          <select
            // Aquí, en el value, debería ir asociado a un estado, que cambiará según cambie el select.
            // value={tags}
            onChange={(event) => console.log(event.target.value)}
          >
            <option value="Work">Work</option>
            <option value="Home">Home</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Precio:
          <input type="number"></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Sube tu imagen:
          <input
            type="file"
            // Ver sesion 3 2:35. Jugar con el objeto para obtener el archivo para subir
            onChange={(event) => console.log(event.target.files)}
          ></input>
        </label>
        <br></br>
        <br></br>
      </form>
    </Layout>
  );
};

export default NewAdvertPage;
