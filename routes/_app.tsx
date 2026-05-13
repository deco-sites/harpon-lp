import { Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import GlobalTags from "$store/components/GlobalTags.tsx";
import Theme from "$store/sections/Theme/Theme.tsx";
import RootUser from "deco-sites/harpon-lp/islands/User.tsx";
import GTM from "deco-sites/harpon-lp/components/googletag/gtm.tsx";
import NoScriptGTM from "deco-sites/harpon-lp/components/googletag/noscript.tsx";

const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));

export default defineApp((_req, ctx) => {
  const isEntrarRoute = ctx.url.pathname === "/entrar";

  return (
    <>
      <Head>
        <GTM />
      </Head>

      <Theme />
      <GlobalTags />
      <NoScriptGTM />
      <ctx.Component />

      {isEntrarRoute && <RootUser />}

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </>
  );
});
