import { useParams, useNavigate } from "react-router-dom";
import Page from "../Layout/Page";
import Button from "../common/Button";
import { useEffect, useState } from "react";
import { getAdDetail, removeAd } from "./service";
import ConfirmationText from "../common/ConfirmationText";

const AdvertDetailPage = (props) => {
  const { adId } = useParams();
  // console.log(adId);
  const [adDet, setAdDet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAdDetail(adId)
      .then((adDet) => setAdDet(adDet))
      .catch(
        (error) => {
          if (error.status === 404) {
            navigate("404");
          }
          // console.log(error);
        }
        // [adId, navigate]
      );
  }, [adId, navigate]);
  // console.log(adDet.name);

  const [aviso, setAviso] = useState(false);

  const borrarAnuncio = async (event) => {
    await removeAd(adId)
      .then(navigate("/adverts/"))
      .catch((error) => error);
  };

  return (
    <Page title="Detalle del anuncio." {...props}>
      <div>Detalle del anuncio {adId}</div>
      <div>
        <p>
          <strong>Nombre: </strong>
          {adDet.name}
        </p>
        <p>
          <strong>Descripción: </strong>
          {adDet.description}
        </p>
        <p>
          <strong>Precio: </strong>
          {adDet.price} €
        </p>
        <p>
          <strong>Compra o venta: </strong>
          {adDet.sale}
        </p>
        <p>
          <strong>Tags: </strong>
          {adDet.tags}
        </p>
        <img
          width="200"
          heigth="200"
          src={adDet.photo}
          alt={`${adDet.photo ? adDet.name : "No hay ninguna foto disponible"}`}
        ></img>
      </div>
      <Button className="loginForm-input" onClick={() => setAviso(true)}>
        Borrar anuncio
      </Button>

      {aviso && (
        <ConfirmationText
          label="¿Seguro que quieres borrar el anuncio?"
          action={borrarAnuncio}
        ></ConfirmationText>
      )}
    </Page>
  );
};

export default AdvertDetailPage;
