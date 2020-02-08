const fs = require("fs");

const localeContent = {
  "en-US.po": `msgid ""
msgstr ""
"POT-Creation-Date: Mon Mar 04 2019 07:27:46 GMT+0100 (CET)\\n"
"Language: en-US\\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=UTF-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
"Plural-Forms: nplurals=2; plural=(n != 1);\\n"
"X-Generator: PhraseApp (phraseapp.com)\\n"

#: src/Greeting.jsx:6
msgid "Hello FikaJS!"
msgstr "Hello FikaJS"

#: src/Greeting.jsx:7
msgid "Let's translate that app to Swedish!"
msgstr "Let's translate that app to Swedish!"
    `,
  "sv-SE.po": `msgid ""
msgstr ""
"POT-Creation-Date: Mon Mar 04 2019 07:27:46 GMT+0100 (CET)\\n"
"Language: sv-SE\\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=UTF-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
"Plural-Forms: nplurals=2; plural=(n != 1);\\n"
"X-Generator: PhraseApp (phraseapp.com)\\n"

#: src/Greeting.jsx:6
msgid "Hello FikaJS!"
msgstr "Hej FikaJS"

#: src/Greeting.jsx:7
msgid "Let's translate this app to Swedish!"
msgstr "Låt oss översätta den här appen till svenska"
    `
};

fs.readdir(`${process.cwd()}/locale/`, (err, locales) => {
  console.log(`🐦  \x1b[1m\x1b[34mGetting ${locales.length} locales\x1b[0m`);

  locales.map(generateTranslatedFile);

  console.log(
    `${locales.length}\x1b[32m locates successfully translated \x1b[0m`
  );
});

function generateTranslatedFile(locale) {
  console.log(locale);

  fs.writeFile(
    `${process.cwd()}/locale/${locale}`,
    localeContent[locale],
    () => {}
  );
}
