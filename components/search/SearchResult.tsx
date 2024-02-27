import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import { Layout as cardLayout } from "$store/components/product/ProductCard.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SearchControls from "$store/islands/SearchControls.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";

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
      <div class="container px-4 sm:py-10">
      <SearchControls
          sortOptions={sortOptions}
          filters={filters}
          breadcrumb={breadcrumb}
          displayFilter={layout?.variant === "drawer"}
        />
      </div>
      <div class='inline-flex items-center ml-[200px] xs:hidden'>
        <svg class='mr-[10px]' xmlns="http://www.w3.org/2000/svg" width="5.886" height="10.294" viewBox="0 0 5.886 10.294">
            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.358,11.341l-3.9-3.892a.733.733,0,0,1,0-1.039.742.742,0,0,1,1.042,0l4.413,4.41a.734.734,0,0,1,.021,1.014l-4.432,4.441a.736.736,0,0,1-1.042-1.039Z" transform="translate(-11.246 -6.196)" fill="#29323a"/>
        </svg>
        <p class='text-[#29323A] '>Todos os produtos</p>
      </div>
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
      <div>
        <h1 class='text-[36px] font-normal ml-[139px] mt-[100px] xs:text-lg xs:ml-[10px] xs:mt-[30px]'>TODOS OS {' '} 
           <span style={{ fontWeight: 'bold' }}>PRODUTOS</span>
        </h1>
        <div class='inline-flex'>
          <h2 class='text-[24px] font-bold ml-[139px] mt-[100px] xs:text-lg xs:ml-[10px]'>
            CATEGORIAS
          </h2>
          <div class="inline-flex items-center ml-[130px] mt-[100px]">
          <svg class='mr-[-30px] z-10 xs:hidden' xmlns="http://www.w3.org/2000/svg" width="16.419" height="16.423" viewBox="0 0 16.419 16.423">
            <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.726,19.727,16.16,15.118a6.508,6.508,0,1,0-.988,1L19.709,20.7a.7.7,0,0,0,.992.026A.707.707,0,0,0,20.726,19.727Zm-9.68-3.553a5.139,5.139,0,1,1,3.634-1.505A5.107,5.107,0,0,1,11.046,16.174Z" transform="translate(-4.5 -4.493)" fill="#29323A"/>
           </svg>
             <input class="w-[444px] h-10 pl-[50px] text-left bg-[#F2F2F2] text-[#29323A] text-sm xs:hidden" type="search" id="MagnifyingGlass" placeholder="Faça uma busca" />
            <p class='font-bold text-[#29323A] ml-[120px] xs:text-xs xs:ml-[-90px]'>Ordenar por:</p>
            <select class='border border-solid bg-[#F2F2F2] w-[157px] h-10 ml-[5px] p-[2px] text-sm xs:text-xs xs:w-[125px] xs:h-[30px]'>
                <option class='text-sm text-[#29323A]'>Mais Relevantes</option>
                <option class='text-sm text-[#29323A]'>Maiores Preços</option>
                <option class='text-sm text-[#29323A]'>Menores Preços</option>
                <option class='text-sm text-[#29323A]'>Mais Vendidos</option>
            </select>
        </div>
        </div>
        <div class='mt-[400px]'>
          <p class='text-normal font-bold mt-[-350px] ml-[139px] xs:text-sm xs:ml-[10px]'>Recapagem</p>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Carbide</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Fresas com ponta</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Hastes</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px] bg-[#29323A]' type='checkbox'> Flanges</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Copos de corte</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Extrusoras</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Sovelas</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Escova Harpon</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Roletes</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Almofadas</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Ferramentas</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Serras</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Reparos e manchão</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Engates e pinos</input>
            </div>
            <hr class='ml-[139px] mt-[30px] w-[260px] text-[#C8C8CA] border xs:ml-0 xs:w-[180px]'></hr>
            <div>
            <p class='text-normal font-bold mt-5 ml-[139px] xs:text-sm xs:ml-[10px]'>Corte</p>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Abrasivos</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Orifício</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Tubo de mistura</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Acessórios e ferramentas</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Peças de reposição</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Hidrojato</input>
            </div>
            <div class='text-xs'>
            <input class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px]' type='checkbox'> Laser</input>
            </div>
        <div class="w-fit grid grid-cols-3 gap-[1.5rem] mt-[-680px] ml-[410px] mb-[100px] xs:grid-cols-2">
                <div class="w-[260px] h-[299px] xs:w-[120px] xs:h-[130px] group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5 xs:w-[45px] xs:mt-[5px] xs:ml-[5px]' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group xs:mt-[15px]">
                        <img class='xs:w-20' src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group xs:text-sm'>FLANGES</p>
                    
                    <div class=' group'>
                        <a href ='/moredetails'>
                            <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        </a>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="w-[260px] h-[299px] xs:w-[120px] xs:h-[130px] group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5 xs:w-[45px] xs:mt-[5px] xs:ml-[5px]' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group xs:mt-[15px]">
                        <img class='xs:w-20' src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group xs:text-sm'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                </div>
                <div class='flex items-center p-2 gap-5 ml-[420px] mb-[100px] mt-[30px]'>
                    <p class='text-[#29323A] text-[20px] hover:bg-[#29323A] hover:text-white hover:w-8 hover:h-8 text-center'>01</p>    
                    <p class='text-[#29323A] text-[20px]'>02</p>    
                    <p class='text-[#29323A] text-[20px]'>03</p>  
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.881" height="13.881" viewBox="0 0 13.881 13.881">
                        <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-6.6 -6.6)">
                            <path id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#29323a"/>
                            <path id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#29323a"/>
                        </g>
                    </svg>  
                </div>    
      </div>
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
