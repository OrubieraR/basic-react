import Layout from "../Layout/Layout";

const NewAdvertPage = () => {
  <Layout title="Escribe tu anuncio.">
    <div>New Advert Page</div>
    <form>
      <label>
        Nombre:
        <input type="text" placeholder="Introduce tu nombre."></input>
      </label>

      <label>
        ¿Es para compra o para venta?
        <input type="radiobutton" name="compvent" value="compra">
          Compra
        </input>
        <input type="radiobutton" name="compvent" value="venta">
          Venta
        </input>
      </label>

      {/* Para el select hay que asociar un estado */}
      <label>
        Selecciona tus tags:
        <select
          // Aquí, en el value, debería ir asociado a un estado, que cambiará según cambie el select.
          // value={tags}
          onChange={(event) => console.log(event.target.value)}
        >
          <option value="Work"></option>
          <option value="Home"></option>
        </select>
      </label>

      <label>
        Precio:
        <input type="number"></input>
      </label>

      <label>
        Sube tu imagen:
        <input
          type="file"
          // Ver sesion 3 2:35. Jugar con el objeto para obtener el archivo para subir
          onChange={(event) => console.log(event.target.files)}
        ></input>
      </label>
    </form>
  </Layout>;
};

export default NewAdvertPage;
