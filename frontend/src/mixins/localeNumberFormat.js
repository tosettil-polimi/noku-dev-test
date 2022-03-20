export default {
  methods: {
    localeNumberFormat(
      numberToFormat,
      maximumSignificantDigits = 3,
      locales = "it-IT"
    ) {
      return new Intl.NumberFormat(locales, {
        maximumSignificantDigits,
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      }).format(numberToFormat);
    },
  },
};
