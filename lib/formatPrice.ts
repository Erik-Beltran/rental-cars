export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};
