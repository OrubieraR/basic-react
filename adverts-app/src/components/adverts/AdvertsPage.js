import { useEffect, useState } from "react";
import { getLatestAds } from "./service";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Page from "../Layout/Page";
import "./AdvertPage.css";

const EmptyList = () => (
  <div>
    <p>Aún no hay ningún anuncio creado.</p>
    <Button as={Link} to="/adverts/new" variant="primary">
      Crea un anuncio
    </Button>
  </div>
);

const AdsPage = (props) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getLatestAds().then((ads) => setAds([]));
  }, []);

  return (
    <Page title="Listado de anuncios:" {...props}>
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
          // <Button as={Link} to="/adverts/new" variant="primary">
          //   Crea el primer anuncio
          // </Button>
          <EmptyList />
        )}
      </div>
    </Page>
  );
};

export default AdsPage;
