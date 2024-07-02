export const declareNumber = (
  number: number, format: [string, string, string]
) => {
  const pluralRules = new Intl.PluralRules("ru-RU");

  const pluralForm = pluralRules.select(number);

  switch (pluralForm) {
    case "one":
      return `${number} ${format[0]}`;

    case "few":
      return `${number} ${format[1]}`;

    default:
      return `${number} ${format[2]}`;
  }
};
