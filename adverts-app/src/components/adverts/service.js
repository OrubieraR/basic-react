import client from "../../api/client";

const adsUrl = "/v1/adverts";

export const getLatestAds = () => {
  const url = adsUrl;
  return client.get(url);
};

export const getAdDetail = (adId) => {
  const url = adsUrl + "/" + adId;
  return client.get(url);
};

export const setAd = async (newAd) => {
  const url = adsUrl;
  return await client.post(url, newAd);
};

export const removeAd = (adId) => {
  const url = adsUrl + "/" + adId;
  return client.delete(url);
};
