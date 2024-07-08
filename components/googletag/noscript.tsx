// components/NoScriptGTM.tsx

import { h } from 'preact';

const NoScriptGTM = () => (
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-KBFGX4LG"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    ></iframe>
  </noscript>
);

export default NoScriptGTM;
