export default (numberToFormat, maximumSignificantDigits = 1, locales = 'it-IT') => {
    return new Intl.NumberFormat(locales, {maximumSignificantDigits}).format(numberToFormat)
}
