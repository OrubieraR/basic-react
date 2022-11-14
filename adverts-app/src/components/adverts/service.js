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

export const setAd = (newAd) => {
  // const config = { "Content-Type": "multipart/form-data" };
  const url = adsUrl;
  return client.post(url, newAd);
};

export const removeAd = (adId) => {
  const url = adsUrl + "/" + adId;
  return client.delete(url);
};
