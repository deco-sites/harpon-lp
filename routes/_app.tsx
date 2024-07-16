import { AppProps } from "$fresh/server.ts";
import GlobalTags from "$store/components/GlobalTags.tsx";
import Theme from "$store/sections/Theme/Theme.tsx";
import RootUser from "site/islands/User.tsx";
import { Head } from "$fresh/runtime.ts";
import GTM from "site/components/googletag/gtm.tsx";
import NoScriptGTM from "site/components/googletag/noscript.tsx";

// Função que registra o service worker ao carregar a página
const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));

function App(props: AppProps) {
  // Verifica se a rota atual é '/entrar'
  const isEntrarRoute = props.url.pathname === "/entrar";

  return (
    <>
    <Head>
      <GTM />
    </Head>
      {/* Inclui fontes padrão e variáveis CSS */}
      <Theme />

      {/* Inclui ícones e manifesto */}
      <GlobalTags />

      {/* Renderiza o componente principal da árvore Preact */}
      <NoScriptGTM />
      <props.Component />

      {/* Renderiza RootUser apenas se estiver na rota '/entrar' */}
      {isEntrarRoute && <RootUser />}

      {/* Inclui o service worker */}
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </>
  );
}

export default App;
