import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

import { useEffect, useState } from "react";
import { getAdDetail } from "./service";

const AdvertDetailPage = (props) => {
  const { adId } = useParams();
  // console.log(adId);
  const [adDet, setAdDet] = useState([]);

  useEffect(() => {
    getAdDetail(adId).then((adDet) => setAdDet(adDet));
  }, []);
  // console.log(adDet.name);

  return (
    <Layout title="Detalle del anuncio." {...props}>
      <div>Detalle del anuncio {adId}</div>
      <div>
        <p>
          <strong>Nombre:</strong>
          {adDet.name}
        </p>
        <p>
          <strong>Descripción:</strong>
          {adDet.description}
        </p>
        <p>
          <strong>Precio:</strong>
          {adDet.price}
        </p>
        <p>
          <strong>Compra o venta:</strong>
          {adDet.sale}
        </p>
        <p>
          <strong>Tags:</strong>
          {adDet.tags}
        </p>
        <img width="300" heigth="300" src={adDet.photo} alt={adDet.name}></img>
      </div>
    </Layout>
  );
};

export default AdvertDetailPage;
