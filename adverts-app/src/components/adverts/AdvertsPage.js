import { useEffect, useState } from "react";
import { getLatestAds } from "./service";

const AdsPage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getLatestAds().then((ads) => setAds(ads));
  }, []);

  return (
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
        <button>Crea el primer anuncio</button>
      )}
    </div>
  );
};

export default AdsPage;
