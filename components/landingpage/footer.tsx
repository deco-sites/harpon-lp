export default function LandingPageFooter() {
    return (
      <div class="bg-[#C8C8CA] w-full h-[242px] flex flex-col">
        <img class="absolute ml-[50px] mt-[20px]" src="logo-harpon.svg" />
        <div class="w-[50px] h-[50px] ml-auto mr-[50px]">
          <a href="https://instagram.com/_harpon " target="_blank">
            <img
              class="mt-[50px] z-10 absolute"
              src="instagram-icon.png"
              alt="Ícone do Instagram"
            >
            </img>
          </a>
        </div>
        <div class="flex flex-grow text-center">
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
        </div>
        <div class="flex ml-[900px] absolute mt-[50px]">
          <img
            class="xs:w-[14px] xs:absolute 1xs:mt-5 1xs:mb-[-20px]"
            src="icon-feather-phone.svg"
          >
          </img>
          <span class="text-[#29323A] text-center  ml-[10px] xs:text-sm xs:px-[5px] 1xs:pl-[15px] 1xs:text-[17px] md:whitespace-nowrap">
            +55(11)4556-0929
          </span>
        </div>
        <div class="flex ml-[700px] absolute mt-[150px]">
          <img
            class="ml-[180px] md:ml-[30px] xs:w-[14px] xs:mt-[30px] xs:mb-[-20px] 1xs:mb-[-22px] 1xs:mt-5 lg:pl-[15px] xl:pl-5"
            src="icon-feather-map-pin.svg"
          >
          </img>
          <span class="text-[#29323A] text-center  ml-[10px] xs:text-sm xs:px-2 1xs:text-[17px] 1xs:pl-[15px] md:whitespace-nowrap">
            Av. Doutor Mauro Lindemberg Monteiro, 1259<br />Jardim Santa Fé,
            Osasco São Paulo - Brasil
          </span>
        </div>
      </div>
    );
  }