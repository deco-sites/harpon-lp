import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import LandingPageFooter from "../landingpage/Footer.tsx";
import ImagesProducts from "../landingpage/Body.tsx";
import LandingPageHeader from "../landingpage/Header.tsx";

export interface Props {
  products: Product[] | null;
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large";
  };
  cardLayout?: cardLayout;
  developer: string;
}

function ProductShelf({
  products,
  title,
  description,
  layout,
  cardLayout,
  developer,
}: Props) {
  const id = useId();
  const platform = usePlatform();

  

  return (
    <div class=' hidden xs:overflow-x-hidden 1xs:overflow-x-hidden sm:overflow-x-hidden md:overflow-x-hidden'>
      <LandingPageHeader />
      <ImagesProducts />
      <LandingPageFooter />
    </div>
  );
}

export default ProductShelf;
