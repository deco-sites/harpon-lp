import { useState, useEffect } from "preact/hooks";
import axios from 'https://cdn.skypack.dev/axios';

interface Category {
  id: string,
  name: string,
}

export default function Navbar()  {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [categories, setCategories] = useState<Category[]>([]);
    const [isRecapagemSubMenuOpen, setRecapagemSubMenuOpen] = useState(false)
    const [isRecapagemItem1SubMenuOpen, setRecapagemItem1SubMenuOpen] = useState(false)
    const [isRecapagemItem2SubMenuOpen, setRecapagemItem2SubMenuOpen] = useState(false)
    const [isCorteSubMenuOpen, setCorteSubMenuOpen] = useState(false)
    const [isRaspagemSubMenuOpen, setRaspagemSubMenuOpen] = useState(false)
    const [isArVaporMenuOpen, setArVaporMenuOpen] = useState(false)
    const [isArVaporMenu2Open, setArVaporMenu2Open] = useState(false)
    const [isBorrachariaMenuOpen, setBorrachariaMenuOpen] = useState(false)
    const [isBorracharia2MenuOpen, setBorracharia2MenuOpen] = useState(false)
    const [isBorracharia3MenuOpen, setBorracharia3MenuOpen] = useState(false)
    const [isRepairSubMenuOpen, setRepairSubMenuOpen] = useState(false)
    const [isCimentacaoMenuOpen, setCimentacaoMenuOpen] = useState(false)
    const [isConsertoMenuOpen, setConsertoMenuOpen] = useState(false)
    const [isCoberturaMenuOpen, setCoberturaMenuOpen] = useState(false)
    const [isEnchimentoMenuOpen, setEnchimentoMenuOpen] = useState(false)
    const [isSegurancaMenuOpen, setSegurancaMenuOpen] = useState(false)
    const [isInspecaoFinalMenuOpen, setInspecaoFinalMenuOpen] = useState(false)
    const [isEscareacaoMenuOpen, setEscareacaoMenuOpen] = useState(false)
    const [isEscareacao2MenuOpen, setEscareacao2MenuOpen] = useState(false)
    const [isEscareacao3MenuOpen, setEscareacao3MenuOpen] = useState(false)
    const [isVulcanizacaoMenuOpen, setVulcanizacaoMenuOpen] = useState(false)
    const [isVulcanizacao2MenuOpen, setVulcanizacao2MenuOpen] = useState(false)

    useEffect(() => {
      console.log("Teste")
      axios.get('https://backend-harpon-hjk3p7rq3q-rj.a.run.app/harpon-products/categories')
      .then((response:any) => {
         setCategories(response.data) 
      }).catch((error:any) =>{
          console.log(error)
      });
  },[])

  const handleCategoryClick = (categoryName: string) => {
    let newSelectedCategories = [categoryName]
    localStorage.setItem('selectedCategories', newSelectedCategories[0])
}
    
    
    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const openRecapagemSubMenu = () => {
        setRecapagemSubMenuOpen(true)
    }

    const closeRecapagemSubMenu = () => {
        setRecapagemSubMenuOpen(false)
    }

    const openRecapagemItem1SubMenu = () => {
    setRecapagemItem1SubMenuOpen(true);
  };

  const closeRecapagemItem1SubMenu = () => {
    setRecapagemItem1SubMenuOpen(false);
  };
    const openRecapagemItem2SubMenu = () => {
    setRecapagemItem2SubMenuOpen(true);
  };

  const closeRecapagemItem2SubMenu = () => {
    setRecapagemItem2SubMenuOpen(false);
  };

  const openRaspagemSubMenu = () => {
    setRaspagemSubMenuOpen(true)
  }

  const closeRaspagemSubMenu = () => {
    setRaspagemSubMenuOpen(false)
  }

  const openArVaporMenu = () => {
    setArVaporMenuOpen(true)
  }

  const closeArVaporMenu = () => {
    setArVaporMenuOpen(false)
  }
  const openArVapor2Menu = () => {
    setArVaporMenu2Open(true)
  }

  const closeArVapor2Menu = () => {
    setArVaporMenu2Open(false)
  }

  const openBorrachariaMenu = () => {
    setBorrachariaMenuOpen(true)
  }

  const closeBorrachariaMenu = () => {
    setBorrachariaMenuOpen(false)
  }
  const openBorracharia2Menu = () => {
    setBorracharia2MenuOpen(true)
  }

  const closeBorracharia2Menu = () => {
    setBorracharia2MenuOpen(false)
  }
  const openBorracharia3Menu = () => {
    setBorracharia3MenuOpen(true)
  }

  const closeBorracharia3Menu = () => {
    setBorracharia3MenuOpen(false)
  }

  const openRepairSubMenu = () => {
    setRepairSubMenuOpen(true)
  }

  const closeRepairSubMenu = () => {
    setRepairSubMenuOpen(false)
  }

  const openEscareacaoMenu = () => {
    setEscareacaoMenuOpen(true)
  }
  const closeEscareacaoMenu = () => {
    setEscareacaoMenuOpen(false)
  }
  const openEscareacao2Menu = () => {
    setEscareacao2MenuOpen(true)
  }
  const closeEscareacao2Menu = () => {
    setEscareacao2MenuOpen(false)
  }
  const openEscareacao3Menu = () => {
    setEscareacao3MenuOpen(true)
  }
  const closeEscareacao3Menu = () => {
    setEscareacao3MenuOpen(false)
  }

  const openCimentacaoMenu = () => {
    setCimentacaoMenuOpen(true)
  }

  const closeCimentacaoMenu = () => {
    setCimentacaoMenuOpen(false)
  }

  const openConsertoMenu = () => {
    setConsertoMenuOpen(true)
  }

  const closeConsertoMenu = () => {
    setConsertoMenuOpen(false)
  }

  const openCoberturaMenu = () => {
    setCoberturaMenuOpen(true)
  }

  const closeCoberturaMenu = () => {
    setCoberturaMenuOpen(false)
  }

  const openEnchimentoMenu = () => {
    setEnchimentoMenuOpen(true)
  }

  const closeEnchimentoMenu = () => {
    setEnchimentoMenuOpen(false)
  }

  const openVulcanizacaoMenu = () => {
    setVulcanizacaoMenuOpen(true)
  }
  const closeVulcanizacaoMenu = () => {
    setVulcanizacaoMenuOpen(false)
  }
  const openVulcanizacao2Menu = () => {
    setVulcanizacao2MenuOpen(true)
  }
  const closeVulcanizacao2Menu = () => {
    setVulcanizacao2MenuOpen(false)
  }

  const openSegurancaMenu = () => {
    setSegurancaMenuOpen(true)
  }
  const closeSegurancaMenu = () => {
    setSegurancaMenuOpen(false)
  }

  const openInspecaoFinalMenu = () => {
    setInspecaoFinalMenuOpen(true)
  }
  const closeInspecaoFinalMenu = () => {
    setInspecaoFinalMenuOpen(false)
  }


    return (
    <div className="relative">
      <div
        id="menu-toggle"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        className="relative flex group ml-[130px] md:ml-0 lg:ml-20"
      >
          <svg
      className="group-hover:fill-[#E9F408]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="#FFFFFF"
      > 
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M21 18c1.1 0 2 .9 2 2s-.9 2-2 2H3c-1.1 0-2-.9-2-2s.9-2 2-2zM21 6H3C1.9 6 1 6.9 1 8s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2zm0 6H3c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2z"/>
    </svg>
        <p class="text-white font-bold text-[18px] group-hover:text-[#E9F408] ml-[10px]">Produtos</p>
        <div
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          style={{ position: "absolute", top: "100%", left: "0", width: "100%", height: "30px" }}
        ></div>
        {isMenuOpen && (
          <ul
            className="absolute mt-2 ml-0 z-10"
            style={{
              top: "calc(100% + 10px)",
              left: "0",
              width: "168px",
              height: "450px",
              background: "#FFFFFF",
              backgroundRepeat: "no-repeat",
              boxShadow: "0px 12px 19px #0000001A",
              opacity: 1,
            }}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <li
                onMouseEnter={openRecapagemSubMenu}
                onMouseLeave={closeRecapagemSubMenu}
            >
              <a
                href="#"
                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Categorias
              </a>
              {isRecapagemSubMenuOpen && (
                <ul
                  className="absolute top-0 left-full mt-0"
                  style={{
                    width: "211px",
                    height: "450px",
                    background: "#FFFFFF",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "0px 12px 19px #0000001A",
                    opacity: 1,
                  }}
                >
                  <li
                    onMouseEnter={openRecapagemItem1SubMenu}
                    onMouseLeave={closeRecapagemItem1SubMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                     Inspeção inicial
                    </a>
                    {isRecapagemItem1SubMenuOpen && (
                      <ul
                        className="absolute top-0 left-full mt-0"
                        style={{
                          width: "209px",
                          height: "450px",
                          background: "#FFFFFF",
                          backgroundRepeat: "no-repeat",
                          boxShadow: "0px 12px 19px #0000001A",
                          opacity: 1,
                        }}
                      >
                        <li
                          onMouseEnter={openRecapagemItem2SubMenu}
                          onMouseLeave={closeRecapagemItem2SubMenu}
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Furadeira pneumática
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Alicate
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Sovela
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Cordão e pendente
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Martelo bola
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Bloco de espuma
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Lanterna para inspeção
                          </a>
                        </li>
                        <li 
                          /* onMouseEnter={openTechTiresSubMenu}
                          onMouseLeave={closeTechTiresSubMenu} */
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Aspirador de pó
                          </a>
                          {/* {isTechTiresSubMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Reto/Angular
                          </a>
                        </li>
                            </ul>
                          )} */}
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Giz
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Marcador líquido
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Bico para limpeza
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                      onMouseEnter={openRaspagemSubMenu}
                      onMouseLeave={closeRaspagemSubMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Raspagem
                    </a>
                    {isRaspagemSubMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Borracha para aro expansivo
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova fita nylon
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Facas circulares
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Espaçador para cj de raspa
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Pedras de afiar
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Trenas
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova para limpeza
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Serras
                              </a>
                        </li>
                            </ul>
                      )}
                  </li>
                  <li
                    onMouseEnter={(e) => {
                      openEscareacaoMenu();
                      openEscareacao2Menu();
                      openEscareacao3Menu();
                    }}
                    onMouseLeave={(e) => {
                      closeEscareacaoMenu();
                      closeEscareacao2Menu();
                      closeEscareacao3Menu();
                    }}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Escareação
                    </a>
                    {(isEscareacaoMenuOpen && isEscareacao2MenuOpen) && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "219px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Furadeira reversível
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Fresas
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide com haste
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] whitespace-nowrap text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide de acabamento
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide cônico
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide desbaste
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide tipo copo arredondado 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide tipo copo paralelo
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Carbide tipo disco
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Esmerilhadeira
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Punho para eixo flexível
                              </a>
                        </li>
                        {isEscareacao2MenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Mola
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Eixo flexível
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Haste
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Engate
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Porca
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Adaptador
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova aço
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Flanges para escovas
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova aço latonado
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova emborrachada
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Disco de corte
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Ponta montada
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Aplicador de cola
                              </a>
                        </li>
                        {isEscareacao2MenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                              <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Lata e tampa com pincel e cola
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Batedor/misturador de cola manual
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova de nylon sem cabo
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Pincel para cola de 3" e 4" L
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Pistola para cola, filtro e bico spray
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Pano de algodão
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Torneira para tambor de cola 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Benzineira
                              </a>
                        </li>
                        </ul>
                        )}
                        </ul>
                        )}
                            </ul>
                      )}
                  </li>
                  <li
                          onMouseEnter={openCimentacaoMenu}
                          onMouseLeave={closeCimentacaoMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Cimentação
                    </a>
                    {isCimentacaoMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Serras
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Flange para escova
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Engate rápido de ½
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Vazador
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Copo de corte
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova de aço
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Esmerilhadeira
                              </a>
                        </li>
                            </ul>
                      )}
                  </li>
                  <li
                    onMouseEnter={openConsertoMenu}
                    onMouseLeave={closeConsertoMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Conserto
                    </a>
                    {isConsertoMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Esmerilhadeira 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Máquina e serra para corte de borracha 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Facas
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Martelete pneumático
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Furadeira elétrica
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Pincel
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Escova manual
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Tesoura forjada 10" ou 12"
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Abridor de pneu 100 a 530 MM
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Régua metálica
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Rolete
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Caneta
                              </a>
                        </li>
                            </ul>
                      )}
                  </li>
                  <li
                    onMouseEnter={openCoberturaMenu}
                    onMouseLeave={closeCoberturaMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                     Cobertura
                    </a>
                    {isCoberturaMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Grampeador 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Chave de fenda/martelo 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Almofadas
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Faca de aço
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Filme propileno perfurado
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Borracha para dreno
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                CJ eletrônico de cortar
                              </a>
                        </li>
                            </ul>
                      )}
                  </li>
                  <li
                    onMouseEnter={openEnchimentoMenu}
                    onMouseLeave={closeEnchimentoMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Enchimento
                    </a>
                    {isEnchimentoMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Extrusora 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Fuso 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Furadeira pneumática
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Mangueira espiral
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Conector
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Bico de extrusão
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Balancim mecânico até 5kg
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Termostato
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Fio de costura pneu trama 10
                              </a>
                        </li>
                            </ul>
                      )}
                  </li>
                  <li
                    onMouseEnter={(e) => {
                      openVulcanizacaoMenu();
                      openVulcanizacao2Menu();
                    }}
                    onMouseLeave={(e) => {
                      closeVulcanizacaoMenu();
                      closeVulcanizacao2Menu();
                    }}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Vulcanização
                    </a>
                    {(isVulcanizacaoMenuOpen && isVulcanizacao2MenuOpen) && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Testador de envelope  
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Vacuômetro ang. ¼" glicerina 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Bomba de vácuo
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Válvula
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Tampa pino
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Pino com retenção
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Engate autoclave
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Engate exaustão
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Engate inflação
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Engate pcl-16
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Outros
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Válvula removível
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Mangueira de silicone 
                              </a>
                        </li>
                        {isVulcanizacao2MenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Mangueira de teflon
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Terminal de mangueira teflon
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Borracha de vedação
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Líquidos 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Engate rápido 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Regulador de ar
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Bexiga para conserto de pneus 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Borrachas 
                              </a>
                        </li>
                        </ul>
                        )}
                            </ul>
                      )}
                  </li>
                  <li
                    onMouseEnter={openSegurancaMenu}
                    onMouseLeave={closeSegurancaMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Equipamentos de segurança
                    </a>
                    {isSegurancaMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Óculos de segurança 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Vestuário 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Protetor facial de acrílico
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Respirador 
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Luva
                              </a>
                        </li>
                        <li>
                              <a
                                href="#"
                                className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                              >
                                Protetor auricular
                              </a>
                        </li>
                            </ul>
                      )}
                  </li>
                  <li
                          onMouseEnter={openInspecaoFinalMenu}
                          onMouseLeave={closeInspecaoFinalMenu}
                  >
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Inspeção final
                    </a>
                    {isInspecaoFinalMenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Lâmina
                          </a>
                        </li>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Pistola para pintura
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Tip trimmer
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Raspador lixa
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Tinta black tire 5 kg
                          </a>
                        </li>
                            </ul>
                          )}
                  </li>
                  <li 
                          onMouseEnter={(e) => {
                            openArVaporMenu();
                            openArVapor2Menu();
                          }}
                          onMouseLeave={(e) => {
                            closeArVaporMenu();
                            closeArVapor2Menu();
                          }}
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Linha de ar e vapor
                          </a>
                          {(isArVaporMenuOpen && isArVaporMenu2Open) && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Mangueira p/ar ibs
                          </a>
                        </li>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Válvula de retenção
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Injeção de caldeira comodoro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Escova tubular de aço
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Gaxeta para pistão
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Visor
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Indicador de nível de caldeira ½
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Vidro indicador de nível 5/8
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Separador de umidade
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Conj. lubrificante
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Válvula
                          </a>
                        </li>
                        {isArVaporMenu2Open && (
                          <ul className="absolute top-0 left-full mt-0"
                          style={{
                            width: "209px",
                            height: "450px",
                            background: "#FFFFFF",
                            backgroundRepeat: "no-repeat",
                            boxShadow: "0px 12px 19px #0000001A",
                            opacity: 1,
                          }}>
                            <li>
                        <a
                          href="#"
                          className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                        >
                          Regulador
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                        >
                          Copo
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                        >
                          Manômetro e termômetro
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                        >
                          Engate rápido
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                        >
                          Espigão e abraçadeiras
                        </a>
                      </li>
                          </ul>
                        )}
                            </ul>
                          )}
                        </li>
                        <li 
                          onMouseEnter={(e) => {
                            openBorrachariaMenu();
                            openBorracharia2Menu();
                            openBorracharia3Menu();
                          }}
                          onMouseLeave={(e) => {
                            closeBorrachariaMenu();
                            closeBorracharia2Menu();
                            closeBorracharia3Menu();
                          }}
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Borracharia
                          </a>
                          {(isBorrachariaMenuOpen && isBorracharia2MenuOpen && isBorracharia3MenuOpen) && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Profundímetro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Calibrador
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Calibrador pneu
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Bico prendedor
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Bico inflador
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Aferidor e adaptador
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Tampa
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Válvula para pneus sem camara
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Calibrador
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Válvula
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Extensão
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Tarraxas
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Suporte
                          </a>
                        </li>
                        {isBorracharia2MenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Núcleo de válvula
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Marreta
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Embalagens
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Calibrador eletrônico 110/220 V
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Chaves
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Espátula
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Kit de monstagem e desmontagem de pneus
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Tarraxas
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Assentador de talão ast-20
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Soquetes
                          </a>
                        </li>
                        {isBorracharia3MenuOpen && (
                            <ul className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "450px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Destalonador de pneus dtl 10
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Cavalete
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Macaco hidráulico
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Máquina de vulcanizar + resistência + termostato
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Anel
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Moto esmeril ½ CV 110 ou 220V
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Estação ressulcadora
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Marcador
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Pasta para monstagem
                          </a>
                        </li>
                        </ul>
                        )}
                        </ul>
                        )}
                            </ul>
                          )}
                        </li>
                </ul>
              )}
            </li>
            
            <div class='block group'>
            <a href='/produtos'>
              <p class='w-[120px] group m-auto py-1 px-1 text-sm text-center mt-[300px] border border-solid bg-[#29323A] text-white hover:bg-[#E9F408] hover:text-[#29323A]'>Ver todos</p>
            </a>
              <svg class='ml-[125px] mt-[-24px]' xmlns="http://www.w3.org/2000/svg" width="19.987" height="22.25" viewBox="0 0 19.987 22.25">
              <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                  <path class='hover:fill-[#E9F408]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                  <path class='hover:fill-[#E9F408]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                </g>
              </svg>
              
            </div>
          </ul> 
        )}
      </div>
    </div>
    )
}
