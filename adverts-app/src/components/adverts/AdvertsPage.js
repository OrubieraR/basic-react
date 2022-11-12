import { useEffect, useState } from "react";
import { getLatestAds } from "./service";
import { Link } from "react-router-dom";
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
      <div>
        {ads.length ? (
          ads.map((ad) => (
            <div className="AdsPage" key={ad.id}>
              <Link to={`/adverts/${ad.id}`}>
                <ul>
                  <li>Artículo: {ad.name}</li>
                  <li>Precio: {ad.price}</li>
                  <li>{ad.sale ? "En venta." : "Se busca para comprar."}</li>
                  <li>Etiquetado con: {ad.tags}</li>
                  <li>Anuncio creado el: {ad.createdAt}</li>
                </ul>
              </Link>
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
