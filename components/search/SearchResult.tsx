import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import { Layout as cardLayout } from "$store/components/product/ProductCard.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SearchControls from "$store/islands/SearchControls.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";
import ProductList from "deco-sites/harpon-lp/islands/ProductList.tsx";

export interface Layout {
  /**
   * @description Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products
   */
  variant?: "aside" | "drawer";
  /**
   * @description Number of products per line on grid
   */
  columns: Columns;
}

export interface Props {
  /** @title Integration */
  page: ProductListingPage | null;
  layout?: Layout;
  cardLayout?: cardLayout;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function Result({
  page,
  layout,
  cardLayout,
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  return (
    <>
      {/* <div class="container px-4 sm:py-10 ">
      <SearchControls
          sortOptions={sortOptions}
          filters={filters}
          breadcrumb={breadcrumb}
          displayFilter={layout?.variant === "drawer"}
        />
      </div>  
        <svg class='mr-[10px]' xmlns="http://www.w3.org/2000/svg" width="5.886" height="10.294" viewBox="0 0 5.886 10.294">
            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.358,11.341l-3.9-3.892a.733.733,0,0,1,0-1.039.742.742,0,0,1,1.042,0l4.413,4.41a.734.734,0,0,1,.021,1.014l-4.432,4.441a.736.736,0,0,1-1.042-1.039Z" transform="translate(-11.246 -6.196)" fill="#29323a"/>
        </svg> */}
      
      
      <SendEventOnLoad
        event={{
          name: "view_item_list",
          params: {
            // TODO: get category name from search or cms setting
            item_list_name: "",
            item_list_id: "",
            items: page.products?.map((product) =>
              mapProductToAnalyticsItem({
                ...(useOffer(product.offers)),
                product,
                breadcrumbList: page.breadcrumb,
              })
            ),
          },
        }}
      />
        
              < ProductList />
    </>
  );
}



function SearchResult({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}

export default SearchResult;
