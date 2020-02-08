const fs = require("fs");

const localeContent = {
  sv: `{
  "app.hello": "Hej FikaJS!",
  "app.lets_translate": "Låt oss översätta den här appen till svenska"
}
  `
};

const locales = ["sv"];

console.log(`🐦  \x1b[1m\x1b[34mReceiving translations ...\x1b[0m`);

locales.map(generateTranslatedFile);

console.log('')

console.log(
  `${locales.length}\x1b[32m locales successfully translated \x1b[0m`
);

function generateTranslatedFile(locale) {
  fs.writeFile(
    `${process.cwd()}/src/translations/locales/${locale}.json`,
    localeContent[locale],
    () => {}
  );
}
