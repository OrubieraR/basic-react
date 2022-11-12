import { useEffect, useState } from "react";
import { getLatestAds } from "./service";
import Button from "../common/Button";
import Layout from "../Layout/Layout";
import "./AdvertPage.css";

const AdsPage = (props) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getLatestAds().then((ads) => setAds(ads));
  }, []);

  return (
    <Layout title="Listado de anuncios:" {...props}>
      <div className="AdsPage">
        {ads.length ? (
          ads.map((ad) => (
            <div key={ad.id}>
              <ul>
                <li>Artículo: {ad.name}</li>
                <li>Precio: {ad.price}</li>
                <li>{ad.sale ? "En venta." : "Se busca para comprar."}</li>
                <li>Etiquetado con: {ad.tags}</li>
                <li>Anuncio creado el: {ad.createdAt}</li>
              </ul>
            </div>
          ))
        ) : (
          <Button>Crea el primer anuncio</Button>
        )}
      </div>
    </Layout>
  );
};

export default AdsPage;
