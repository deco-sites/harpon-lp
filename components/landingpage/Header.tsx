export default function LandingPageHeader() {
    return (
      <>
      <div class="flex items-center w-full h-20 bg-[#29323A] xs:w-auto sm:w-[798px]">
        <h1><a href="https://www.harpon.com.br/"><img class='absolute -mt-5 ml-[50px] sm:ml-5' alt="Harpon - Produtos para Recapagem e Remold de Pneus" title="Harpon" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2543/cdb990d4-02a9-4579-af91-444e80870459" width="126" height="16" srcset="/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2543%2Fcdb990d4-02a9-4579-af91-444e80870459&amp;fit=cover&amp;width=126&amp;height=16&amp;__frsh_c=0938a1db1aac8371eb472fc7c891bc24586b1fbf 126w, /live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F2543%2Fcdb990d4-02a9-4579-af91-444e80870459&amp;fit=cover&amp;width=252&amp;height=32&amp;__frsh_c=0938a1db1aac8371eb472fc7c891bc24586b1fbf 252w"></img></a></h1>
        {/* <div class="inline-flex items-center  ml-[40%] xs:ml-[270px] 1xs:ml-[280px] md:ml-[300px] lg:ml-[400px]">
          <svg class='mr-[-15px] z-10 xs:w-[30] xs:h-5 1xs:w-[35px] 1xs:h-[25px]' xmlns="http://www.w3.org/2000/svg" width="16.419" height="16.423" viewBox="0 0 16.419 16.423">
            <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.726,19.727,16.16,15.118a6.508,6.508,0,1,0-.988,1L19.709,20.7a.7.7,0,0,0,.992.026A.707.707,0,0,0,20.726,19.727Zm-9.68-3.553a5.139,5.139,0,1,1,3.634-1.505A5.107,5.107,0,0,1,11.046,16.174Z" transform="translate(-4.5 -4.493)" fill="#fff"/>
           </svg>
        <input class="w-80 h-10 pl-[50px] ml-[-20px] text-left bg-[#3D4B58] text-[#C8C8CA] xs:hidden 1xs:hidden sm:w-[240px] md:w-[240px] " type="search" id="MagnifyingGlass" placeholder="O que você procura?" />
      </div> */}
      <div class="flex-auto flex justify-end mr-[100px] ml-[200px] gap-[10px] text-white font-bold sm:ml-5 md:mr-0 md:ml-5 lg:ml-[50px] lg:mr-[-120px]">
          <a href='/sobre-nos'>
            <p class='px-4 py-3 hover:text-[#E9F408]'>Sobre Nós</p>
          </a>
{/*           <a href='#'>
            <p class='px-4 py-3 hover:text-[#E9F408]'>Contato</p>
          </a> */}
        </div>
      </div>
      </>
    );
  }