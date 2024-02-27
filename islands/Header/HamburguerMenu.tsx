import { useState } from "preact/hooks";

export default function Navbar()  {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isRecapagemSubMenuOpen, setRecapagemSubMenuOpen] = useState(false)
    const [isRecapagemItem1SubMenuOpen, setRecapagemItem1SubMenuOpen] = useState(false)
    const [isRecapagemItem2SubMenuOpen, setRecapagemItem2SubMenuOpen] = useState(false)
    const [isCorteSubMenuOpen, setCorteSubMenuOpen] = useState(false)
    const [isTechTiresSubMenuOpen, setTechTiresSubMenuOpen] = useState(false)
    const [isToolsSubMenuOpen, setToolsSubMenuOpen] = useState(false)
    const [isSawsSubMenuOpen, setSawsSubMenuOpen] = useState(false)
    const [isRepairSubMenuOpen, setRepairSubMenuOpen] = useState(false)
    
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

  const openTechTiresSubMenu = () => {
    setTechTiresSubMenuOpen(true)
  }

  const closeTechTiresSubMenu = () => {
    setTechTiresSubMenuOpen(false)
  }

  const openToolsSubMenu = () => {
    setToolsSubMenuOpen(true)
  }

  const closeToolsSubMenu = () => {
    setToolsSubMenuOpen(false)
  }

  const openSawsSubMenu = () => {
    setSawsSubMenuOpen(true)
  }

  const closeSawsSubMenu = () => {
    setSawsSubMenuOpen(false)
  }

  const openRepairSubMenu = () => {
    setRepairSubMenuOpen(true)
  }

  const closeRepairSubMenu = () => {
    setRepairSubMenuOpen(false)
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
                Recapagem
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
                     Carbide
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
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Cônico
                          </a>
                          {isRecapagemItem2SubMenuOpen && (
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
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Submenu Item 3 (Recapagem)
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Submenu Item 4 (Recapagem)
                          </a>
                        </li>
                      </ul>
                          )}
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Copo
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Bolacha
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            S
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Flat Disc
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            FR- Faca circular
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Pirulito
                          </a>
                        </li>
                        <li 
                          onMouseEnter={openTechTiresSubMenu}
                          onMouseLeave={closeTechTiresSubMenu}
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Tech tires
                          </a>
                          {isTechTiresSubMenuOpen && (
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
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Reto/Angular
                          </a>
                        </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            DW
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            CW
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Supar
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Himapel
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Copo chato
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Fresas com ponta
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Hastes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Flanges
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Copos de corte
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                     Extrusores
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Sovelas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Escova Harpon
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Roletes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                    >
                      Almofadas
                    </a>
                  </li>
                  <li 
                          onMouseEnter={openToolsSubMenu}
                          onMouseLeave={closeToolsSubMenu}
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Ferramentas
                          </a>
                          {isToolsSubMenuOpen && (
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
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Pneumáticas
                          </a>
                        </li>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Extrusora
                          </a>
                        </li>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Manuais
                          </a>
                        </li>
                            </ul>
                          )}
                        </li>
                        <li 
                          onMouseEnter={openSawsSubMenu}
                          onMouseLeave={closeSawsSubMenu}
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Serras
                          </a>
                          {isSawsSubMenuOpen && (
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
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Circular
                          </a>
                        </li>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Separadores
                          </a>
                        </li>
                            </ul>
                          )}
                        </li>
                        <li 
                          onMouseEnter={openRepairSubMenu}
                          onMouseLeave={closeRepairSubMenu}
                        >
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] text-base font-[Albert Sans] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Reparos e manchão
                          </a>
                          {isRepairSubMenuOpen && (
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
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Saco de ar
                          </a>
                        </li>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Envelope 
                          </a>
                        </li>
                                <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Bladders
                          </a>
                        </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white"
                          >
                            Engates e pinos
                          </a>
                        </li>
                </ul>
              )}
            </li>
            
            <div class='block group'>
            <a href='/productlist'>
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
