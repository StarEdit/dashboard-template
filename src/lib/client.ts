export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
