import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import type { Product, Suggestion } from "apps/commerce/types.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import WhatsAppButon from "$store/islands/WhatsAppButon.tsx";
/* import { LanguageProvider } from "deco-sites/harpon-lp/context/LanguageContext.tsx"; */

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };
}


function Header({
  alerts,
  searchbar,
  navItems = [],
  logo,
}: Props) {
  const platform = usePlatform();

  return (
    <>
      {/* <LanguageProvider> */}
      <header style={{ height: headerHeight }}>
        <Drawers
          menu={{ items: navItems }}
          searchbar={searchbar}
          platform={platform}
        >
          <div class="bg-[#29323A] fixed w-full z-50">
            <Alert alerts={alerts} />
            <Navbar items={navItems} searchbar={searchbar} logo={logo} />
          </div>
        </Drawers>
        <WhatsAppButon />
      </header>
      {/* </LanguageProvider> */}
    </>
  );
}

export default Header;
