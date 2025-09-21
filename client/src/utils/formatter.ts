const intlConfig = {
  locale: "de-DE",
  style: "currency" as const,
  currency: "EUR",
};

export const formatter = new Intl.NumberFormat(intlConfig.locale, {
  style: intlConfig.style,
  currency: intlConfig.currency,
});
