import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import Image from "apps/website/components/Image.tsx";
/* import HamburguerMenu from "$store/islands/Header/HamburguerMenu.tsx"; */
import MenuHamburguer from '$store/islands/MenuHamburguer.tsx'
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar({ items, searchbar, logo }: {
  items: INavItem[];
  searchbar?: SearchbarProps;
  logo?: { src: string; alt: string };
}) {
  const platform = usePlatform();

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:-mt-[60px] 1xs:-mt-[60px] sm:-mt-[60px] flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2"
      >
        <MenuButton />

        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center xs:hidden 1xs:absolute 1xs:mb-[150px] 1xs:hidden sm:hidden lg:hidden 2xl:hidden"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image src={logo.src} alt={logo.alt} width={126} height={16} />
          </a>
        )}

        <div class="flex gap-1">
          <SearchButton />
          {platform === "vtex" && <CartButtonVTEX />}
          {platform === "vnda" && <CartButtonVDNA />}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden -mt-[60px] 2xl:flex xl:flex lg:flex md:flex sm:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 h-20">
        {/* <MenuHamburguer /> */}
        <div class="flex-none w-44 md:ml-[-130px] lg:ml-[-140px]"> 
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 py-3 w-[160px]"
            >
              <Image src={logo.src} alt={logo.alt} width={126} height={16} />
            </a>
          )}
        </div>
        <div class=" flex justify-start ml-5 gap-[10px] text-white font-bold sm:ml-[350px] md:mr-0 md:ml-0 lg:ml-[50px] lg:mr-[-120px]">
        {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          {platform === "vtex" && <CartButtonVTEX />}
          {platform === "vnda" && <CartButtonVDNA />}
          {platform === "wake" && <CartButtonWake />}
          {platform === "shopify" && <CartButtonShopify />}
        </div>
      </div>
    </>
  );
}
/* Testando o css*/ 
export default Navbar;
