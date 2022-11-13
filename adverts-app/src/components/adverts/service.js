import client from "../../api/client";

const adsUrl = "api/ads";
const adDetail = `api/ads/`;

export const getLatestAds = () => {
  const url = adsUrl;
  return client.get(url);
};

export const getAdDetail = (adId) => {
  const url = adDetail + adId;
  return client.get(url);
};

export const setAd = (newAd) => {
  const url = adsUrl;
  return client.post(url, newAd);
};

export const removeAd = (adId) => {
  const url = adDetail + adId;
  return client.delete(url);
};
