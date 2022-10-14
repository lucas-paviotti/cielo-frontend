export const formatValueToUsd = (value) => {
  if (typeof value === "string") {
    const parsedValue = parseInt(value);
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(parsedValue);
  }

  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
