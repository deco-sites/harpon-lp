import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Icon from "$store/components/ui/Icon.tsx";
import SearchResult from "deco-sites/harpon-lp/islands/SearchResult.tsx";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

export function Search() {
  return (
    <>
      <SearchResult />
      {/* <div class="inline-flex items-center mt-5 ml-[77%] z-10 xs:ml-[100px] 1xs:ml-[100px] 1xs:w-[260px] sm:ml-[20%] md:ml-[67%] lg:ml-[65%] xl:ml-[74%]"> */}
      {/* <select class='hidden border-solid bg-[#3D4B58] w-[120px] h-10 ml-[-160px] mr-[60px] p-2 text-sm text-[#C8C8CA]'>
                <option class='text-sm text-[#C8C8CA]'>Português</option>
                <option class='text-sm text-[#C8C8CA]'>English</option>
                <option class='text-sm text-[#C8C8CA]'>Español</option>
            </select> */}
          {/* <svg class='mr-[-15px] z-10 pointer-events-auto xs:w-[30] xs:h-5 1xs:w-[35px] 1xs:h-[25px]' xmlns="http://www.w3.org/2000/svg" width="16.419" height="16.423" viewBox="0 0 16.419 16.423">
            <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.726,19.727,16.16,15.118a6.508,6.508,0,1,0-.988,1L19.709,20.7a.7.7,0,0,0,.992.026A.707.707,0,0,0,20.726,19.727Zm-9.68-3.553a5.139,5.139,0,1,1,3.634-1.505A5.107,5.107,0,0,1,11.046,16.174Z" transform="translate(-4.5 -4.493)" fill="#fff"/>
           </svg>
        <input class="w-80 h-10 pl-[50px] ml-[-20px] text-left bg-[#3D4B58] text-[#C8C8CA] pointer-events-auto xs:w-[240px] 1xs:block md:w-[240px]" type="search" id="MagnifyingGlass" placeholder="O que você procura?" />
      </div> */}

      
      <a
            class="hidden btn btn-sm btn-ghost ml-10 xs:mb-[-20px] md:ml-5"
            href="/entrar"
            aria-label="Log in"
          >
            <div class='flex items-center group 2xl:ml-[200px]'>
              <svg class='ml-[-15px] 1xs:w-[35px] 1xs:h-[25px]' xmlns="http://www.w3.org/2000/svg" width="19.987" height="22.25" viewBox="0 0 19.987 22.25">
                <g  id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-4.75 -3.25)">
                  <path class='group-hover:fill-[#E9F408]' id="Caminho_12" data-name="Caminho 12" d="M23.794,29.924a.943.943,0,0,1-.943-.943V26.718a3.587,3.587,0,0,0-3.583-3.583H10.218a3.583,3.583,0,0,0-3.583,3.583v2.263a.943.943,0,1,1-1.886,0V26.718a5.468,5.468,0,0,1,5.468-5.468h9.051a5.474,5.474,0,0,1,5.468,5.468v2.263A.943.943,0,0,1,23.794,29.924Z" transform="translate(0 -4.424)" fill="#fff"/>
                  <path class='group-hover:fill-[#E9F408]' id="Caminho_13" data-name="Caminho 13" d="M16.218,3.25A5.468,5.468,0,1,1,10.75,8.718,5.474,5.474,0,0,1,16.218,3.25Zm0,9.051a3.583,3.583,0,1,0-3.583-3.583A3.587,3.587,0,0,0,16.218,12.3Z" transform="translate(-1.475)" fill="#fff"/>
                </g>
              </svg>
              <p class='ml-2 mt-[10px] text-base text-white font-normal group-hover:text-[#E9F408] xs:hidden 1xs:hidden'>Entre ou cadastre-se</p>
            </div>
          </a>
    <hr class='hidden w-[1080px] ml-[135px] divide-solid border-solid mt-5 text-[#4D5A65] xs:ml-0 1xs:ml-0 md:ml-0 lg:w-[900px] lg:ml-[50px] 2xl:w-[1600px]'></hr>
    </>
  )
}

export default Search;   