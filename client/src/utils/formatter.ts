const intlNumberFormatValues = ["de-DE", "currency", "EUR"];

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1] as "currency",
  currency: intlNumberFormatValues[2],
});
