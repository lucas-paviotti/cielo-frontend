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
    const error = new Error(`An error occured please try again`);
    error.status = response.status;
    throw error;
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

// Imagen para compartir (og:image): 1200x630 y liviana para que WhatsApp muestre la vista previa
export function getStrapiShareImage(mediaList) {
  const image = mediaList?.find((item) =>
    item.attributes.mime?.startsWith("image/")
  );
  if (!image) return;

  const url = getStrapiMedia(image);
  if (url.includes("res.cloudinary.com") && url.includes("/upload/")) {
    return url.replace("/upload/", "/upload/w_1200,h_630,c_fill,q_auto,f_jpg/");
  }

  return image.attributes.formats?.large ? getStrapiMedia(image, "large") : url;
}
