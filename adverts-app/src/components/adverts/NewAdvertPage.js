import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Page from "../Layout/Page";
import { setAd } from "./service";
import "../auth/LoginPage.css";

const NewAdvertPage = (props) => {
  const [name, setName] = useState("");
  const [sale, setSale] = useState("");
  let [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeUsername = (event) => setName(event.target.value);
  const handleChangeSale = (event) => setSale(event.target.value);
  const handleChangeTags = (event) => setTags(event.target.value);
  const handleChangePrice = (event) => setPrice(event.target.value);
  const handleChangePhoto = (event) => setPhoto(event.target.files);
  const handleChandgeDescription = (event) =>
    setDescription(event.target.value);
  const handleErrorClick = () => setError(null);

  const handleSubmitNewAdvert = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // formData.append("name", name);
    // console.log(name);
    // formData.append("description", description);
    // formData.append("sale", sale);
    // formData.append("price", price);
    // formData.append("photo", photo);
    // formData.append("tags", tags);
    // console.log(formData.get("photo"));

    // console.log(formData.get("price"));
    await setAd(formData).then(
      function (response) {
        // console.log(location.pathname + "/" + response.id);
        navigate("/adverts/" + response.id);
      },

      (error) => setError(error)
    );
  };
  // console.log(name, compvent, tags, price, photo);

  const isEnabled = () => {
    return name && sale && price && tags;
  };

  return (
    <Page title="Escribe tu anuncio." {...props}>
      <div>New Advert Page</div>
      <form onSubmit={handleSubmitNewAdvert}>
        <br></br>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            placeholder="Introduce tu nombre."
            onChange={handleChangeUsername}
            value={name}
          ></input>
        </label>
        <br></br>
        <p>¿Es para compra o para venta?</p>
        <label>
          Compra:
          <input
            type="radio"
            name="sale"
            value="compra"
            onChange={handleChangeSale}
          />
        </label>
        <label>
          Venta:
          <input
            type="radio"
            name="sale"
            value="venta"
            onChange={handleChangeSale}
          />
        </label>
        <br></br>
        <br></br>
        {/* <label>
          Descripción del producto:
          <textarea
            type="text"
            onChange={handleChandgeDescription}
            value={description}
          ></textarea>
        </label>
        <br></br>
        <br></br> */}
        {/* Para el select hay que asociar un estado */}
        <label>
          Selecciona tus tags:
          <select
            // Aquí, en el value, debería ir asociado a un estado, que cambiará según cambie el select.
            // value={tags}
            // onChange={function (event) {
            //   console.log(event.target.value);
            //   handleChangeTags();
            // }}
            onChange={handleChangeTags}
            name="tags"
            defaultValue={{ label: "Elige una categoría", value: 0 }}
          >
            <option>Elige una categoría</option>
            <option value="Work">Work</option>
            <option value="Motor">Motor</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Mobile">Mobile</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Precio:
          <input
            type="number"
            name="price"
            onChange={handleChangePrice}
            value={price}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Sube tu imagen:
          <input
            type="file"
            name="photo"
            // Ver sesion 3 2:35. Jugar con el objeto para obtener el archivo para subir
            // onChange={function (event) {
            //   console.log(event.target.value);
            //   handleChangePhoto();
            // }}
            onChange={handleChangePhoto}
            // value={photo}
          ></input>
        </label>
        <br></br>
        <br></br>
        <Button
          type="submit"
          className="loginForm-input"
          disabled={!isEnabled()}
        >
          Crear anuncio
        </Button>
      </form>
    </Page>
  );
};

export default NewAdvertPage;
