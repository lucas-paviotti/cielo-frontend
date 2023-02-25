export const getAircraftLink = (manufacturer, model, registration) => {
  if (!registration)
    return (manufacturer + "-" + model).replaceAll(" ", "-").toLowerCase();

  return (manufacturer + "-" + model + "-" + registration)
    .replaceAll(" ", "-")
    .toLowerCase();
};
