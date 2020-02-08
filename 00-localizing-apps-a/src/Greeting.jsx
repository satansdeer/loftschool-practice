import React from "react";
import { FormattedMessage } from "react-intl";

// export default () => (
//   <div>
//     <h1>Hello FikaJS!</h1>
//     <p>Let's translate this app to Swedish!</p>
//   </div>
// );

export default () => (
  <div>
    <h1>
      <FormattedMessage defaultMessage="Hello FikaJS" id="app.hello" />
    </h1>
    <FormattedMessage
      defaultMessage="Let's translate this app to Swedish!"
      id="app.lets_translate"
    />
    <p></p>
  </div>
);
