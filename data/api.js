import qs from "qs";

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${process.env.REACT_APP_STRAPI_URL}${`/api${path}${
    queryString ? `?${queryString}` : ""
  }`}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}

export function getStrapiMedia(media, size) {
  if (!media) return;

  let url = media.data
    ? media.data.attributes
    : size
    ? media.attributes.formats[size].url
    : media.attributes.url;

  const imageUrl = url.startsWith("/")
    ? `${process.env.REACT_APP_STRAPI_URL}${url}`
    : url;
  return imageUrl;
}
