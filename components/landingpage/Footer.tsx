export default function LandingPageFooter() {
    return (
      <div class="bg-[#C8C8CA] w-full h-[150px] flex flex-col xs:w-auto xs:h-[220px] xs:mt-20 1xs:h-[310px] 1xs:mt-[130px] sm:w-[798px] md:h-[200px] lg:mt-0 lg:h-[200px]">
        <a href="/"><img class="absolute ml-[50px] mt-[50px] xs:mt-3 xs:ml-5 1xs:mt-3 1xs:ml-5 sm:mt-3 sm:ml-5 md:mt-3 md:ml-5 lg:mt-3 lg:ml-5 xl:ml-10" src="logo-harpon.svg" alt='logo harpon' /></a>
        <div class="w-[50px] h-[50px] ml-auto mr-[200px] xl:mr-[100px] 2xl:mr-[100px]">
          <a href="https://instagram.com/_harpon " target="_blank">
            <img
              class="mt-[50px] z-10 absolute xs:mt-3 xs:ml-[150px] 1xs:mt-3 1xs:ml-[150px] sm:mt-3 sm:ml-[150px] sm:w-10 md:mt-3 md:ml-[150px] lg:mt-3 lg:ml-[150px]"
              src="instagram-icon.png"
              alt="Ícone do Instagram"
            >
            </img>
          </a>
        </div>
        {/* <div class="flex flex-grow text-center">
          <div class="w-[20%] text-justify ml-[250px]">
            <h2 class="text-[#29323A] text-lg  font-bold md:text-[18px] xs:text-[16px] 1xs:text-lg">
              Home
            </h2>
            <h2 class="text-[#29323A] font-bold md:text-[18px] mt-4 whitespace-[nowrap] xs:text-[16px]  xs:whitespace-[nowrap] 1xs:text-lg">
              Sobre Nós
            </h2>
            <h2 class="text-[#29323A] text-lg  font-bold md:text-[18px] mt-4 xs:text-[16px] 1xs:text-lg">
              Suporte
            </h2>
            <h2 class="text-[#29323A]  text-lg font-bold md:text-[18px] mt-4 xs:text-[16px] 1xs:text-lg">
              Contato
            </h2>
          </div>
          <div class="w-[20%] text-justify">
            <h2 class="text-[#29323A] text-lg  font-bold text-[18px] xs:text-sm">
              Produtos
            </h2>
            <a href="https://www.harpon.com.br/recauchutagem">
              <h2 class="text-[#29323A] font-bold text-[18px] mt-[15px] xs:text-sm">
                Recapagem
              </h2>
            </a>
            <h2 class="text-[#29323A] font-bold text-[18px] mt-[15px] xs:text-sm">
              Corte
            </h2>
          </div>
        </div> */}
        <div class="inline-flex items-center ml-[400px] absolute mt-[50px] xs:block xs:relative xs:ml-0 xs:mt-[50px] 1xs:block 1xs:relative 1xs:ml-0 sm:ml-5 sm:mt-20 md:ml-5 md:mt-20 lg:ml-5 lg:mt-20">
          <img
            class="xs:w-[14px] xs:absolute xs:ml-[30px] 1xs:mt-5 1xs:mb-[-20px] 1xs:ml-10"
            src="icon-feather-phone.svg" alt='ícone de telefone'
          >
          </img>
          <span class="flex text-[#29323A] ml-[10px] xs:text-sm xs:px-[5px] xs:ml-[50px] 1xs:ml-[50px] 1xs:pl-[15px] 1xs:text-[17px] sm:whitespace-nowrap md:whitespace-nowrap">
            +55(11)4556-0929
          </span>
          <img
            class="ml-[180px] md:ml-[30px] xs:w-[14px] xs:mt-[30px] xs:mb-[-20px] xs:ml-[30px] 1xs:mb-[-22px] 1xs:mt-5 1xs:ml-10 sm:ml-5 lg:pl-[15px] xl:pl-5"
            src="icon-feather-map-pin.svg" alt='ícone do maps'
          >
          </img>
          <span class="flex text-[#29323A] ml-[10px] xs:text-sm xs:px-2 xs:ml-[50px] 1xs:text-[17px] 1xs:pl-[15px] 1xs:ml-[50px] sm:whitespace-nowrap md:whitespace-nowrap">
            Av. Doutor Mauro Lindemberg Monteiro, 1259<br />Jardim Santa Fé,
            Osasco <br /> São Paulo - Brasil
          </span>
        </div>
        
        
      </div>
    );
  }