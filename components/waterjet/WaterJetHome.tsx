export default function WaterJetHome() {
    
   return (
    <div>
            <div className="absolute w-[450px] pl-[120px] pt-[200px] pb-[150px] text-[36px] font-[Albert Sans] font-normal text-white xs:w-min xs:text-2xl xs:mt-[90px] xs:pl-[80px] 1xs:text-[26px] 1xs:w-min 1xs:mt-[90px] 1xs:pl-[100px]">
                PARA EMPRESAS E PNEUS{' '}
                
                <span style={{ fontWeight: 'bold' }}>QUE NUNCA PARAM</span>
            </div>
            <img class="object-cover w-full h-full xs:h-[600px]" src='banner-principal.png'></img>
            <div class='flex mt-[150px] pl-[50px] mb-[100px] xs:w-max xs:flex-col xs:mt-0 xs:mb-0  1xs:w-max 1xs:flex-col 1xs:mt-0 1xs:px-20 1xs:mb-0 md:ml-[-20px]'>
                    <div class='w-[50%] p-4 2xl:ml-[150px]'>
                        <h1 class='text-3xl mt-12 font-[Albert Sans] w-[439px] xs:text-[20px] xs:w-[200px] 1xs:text-2xl '>NUNCA{' '} 
                        <span style={{ fontWeight: 'bold' }}>PARAMOS</span></h1>
                        <p class='mt-5 text-left font-normal text-lg text-[#29323A] opacity-100 font-[Albert Sans xs:w-[200px] xs:text-sm 1xs:text-base 1xs:w-[250px]'>Nós somos parecidos, assim como vocês estamos em constante movimento, rodando sem parar, seu time e seus clientes dependem do seu torque.
                        Cada demanda nova é motivo a mais para continuar em frente, por isso somos o parceiro ideal para recapadoras que não param de crescer.</p>
                    </div>
                    <div class='w-1/2 md:mr-[15px]'>
                        <img class='xs:w-[500px] 1xs:w-[550px]' src='man-tires.png' alt='Homem segurando um pneu'></img>
                    </div>
            </div>
            <div className="flex relative gap-3 justify-end m-auto xs:w-max xs:flex-col xs:mt-0 1xs:w-max 1xs:flex-col 1xs:mt-0 md:w-max">
            <div className="relative group">
            <div className="image-container">
                <div className="image-zoom" style={{ overflow: 'hidden' }}>
                <div className="zoomable-image">
                    <img
                    src="man-tires2.png"
                    alt="Homem montando pneu"
                    className="transition-transform hover:scale-110 xs:w-[350px] 1xs:w-[430px] md:w-[360px]"
                    />
                </div>
                </div>
                <a class='xs:text-[10px] 1xs:text-sm md:text-sm' href='/produtosparawaterjet'>
                <p
                    style={{border: "solid 1px white", padding: "8px"}}
                    className="absolute z-10 mt-[-70px] ml-8 image-overlay text-white group-hover:text-[#29323A] group-hover:bg-[#E9F408]"
                > VER PRODUTOS 
                </p>
                </a>
                <div className="absolute bottom-[150px] left-[30px] text-[32px] font-[Albert Sans] font-normal text-white xs:text-base xs:mb-[-20px] 1xs:text-xl md:text-lg md:mb-[-20px] lg:mb-[-20px]">
                BORRACHA PARA{' '}
                <span style={{ fontWeight: 'bold' }}>VULCANIZAÇÃO</span>
                </div>
            </div>
            </div>
            <div className="w-1/2 relative group xs:w-max 1xs:w-max lg:w-max">
            <div className="image-container">
                <div className="image-zoom" style={{ overflow: 'hidden' }}>
                <div className="zoomable-image">
                    <img
                    src="hand-tires.png"
                    alt="Homem montando pneu"
                    className="transition-transform hover:scale-110 xs:w-[350px] 1xs:w-[430px] md:w-[360px] lg:w-max"
                    />
                </div>
                </div>
                <a class='xs:text-[10px] 1xs:text-sm md:text-sm' href='/produtosparawaterjet'>
                <p
                    style={{border: "solid 1px white", padding: "8px"}}
                    className="absolute z-10 mt-[-70px] ml-8 image-overlay text-white group-hover:text-[#29323A] group-hover:bg-[#E9F408]"
                >   VER PRODUTOS 
                </p>
                </a>

                <div className="absolute bottom-[190px] left-[30px] text-[32px] font-[Albert Sans] font-normal text-white xs:text-base xs:mb-[-60px] 1xs:text-xl 1xs:mb-[-30px] md:text-lg md:mb-[-60px] lg:mb-[-20px]">
                {' '}
                <span style={{ fontWeight: 'bold' }}>CARBIDES</span>
                </div>
            </div>
            </div>
        </div>
        <div class='flex 2xl:justify-center mt-[150px] xs:mt-0 1xs:mt-0'> 
            <div class='w-[675px] ml-0 xs:hidden 1xs:hidden'>
                <img class='md:w-[400px] md:h-[640px] lg:h-[640px]' src='tire.png' alt='Pneu com faixa amarela'></img>
            </div>
            <div class='w-[55%] bg-[#29323A] xs:w-max xs:m-auto 1xs:w-full md:w-full'>
                <h1 class='text-white  text-4xl text-center font-[Albert Sans] mt-[50px] xs:text-[20px] xs:whitespace-[nowrap] xs:px-[50px] 1xs:text-[26px] md:text-[30px] md:mr-2 lg:ml-10 lg:w-max'>NOSSOS{' '} 
                <span style={{ fontWeight: 'bold' }}>DIFERENCIAIS</span>
                </h1>
                <div class='w-[444px] h-[105px] mt-5 ml-[180px] mb-3 bg-[#3D4B58] xs:w-[280px] xs:h-[90px] xs:ml-[25px] 1xs:ml-10 1xs:w-[350px] md:w-[330px] md:ml-[30px] lg:ml-10 2xl:ml-[320px]'
                      style='clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%);'   
                >
                    <img class='ml-5 pt-[25px] xs:w-[30px]' src='new_calendar.svg'></img>
                    <p class='font-semibold tx-base text-white font-[Albert Sans] ml-[90px] mt-[-50px] xs:text-xs xs:whitespace-[nowrap] xs:ml-[70px]'>Alta disponibilidade</p>
                    <p class='text-[#9CA3AF] text-xs ml-[90px] font-[Albert Sans] xs:text-[10px] xs:pt-[5px] xs:ml-[70px]'>Temos estoque de todos os produtos para entrega rápida.</p>
                </div>
                <div class='w-[444px] h-[105px] mt-5 ml-[180px] mb-3 bg-[#3D4B58] xs:w-[280px] xs:h-[90px] xs:ml-[25px] 1xs:ml-10 1xs:w-[350px] md:w-[330px] md:ml-[30px] lg:ml-10 2xl:ml-[320px]'
                      style='clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%);'   
                >
                    <img class='ml-5 pt-[25px] xs:w-[30px]' src='hands.svg'></img>
                    <p class='font-semibold tx-base text-white font-[Albert Sans] ml-[90px] mt-[-50px] xs:text-xs xs:whitespace-[nowrap] xs:ml-[70px]'>Time técnico</p>
                    <p class='text-[#9CA3AF] text-xs ml-[90px] font-[Albert Sans] xs:text-[10px] xs:pt-[5px] xs:ml-[70px]'>Profissionais qualificados para ajudar na sua performance.</p>
                </div>
                <div class='w-[444px] h-[105px] mt-5 ml-[180px] mb-3 bg-[#3D4B58] xs:w-[280px] xs:h-[90px] xs:ml-[25px] 1xs:ml-10 1xs:w-[350px] md:w-[330px] md:ml-[30px] lg:ml-10 2xl:ml-[320px]'
                      style='clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%);'   
                >
                    <img class='ml-5 pt-[25px] xs:w-[30px]' src='new_world.svg'></img>
                    <p class='font-semibold tx-base text-white font-[Albert Sans] ml-[90px] mt-[-50px] xs:text-xs xs:whitespace-[nowrap] xs:ml-[70px]'>Você no centro</p>
                    <p class='text-[#9CA3AF] text-xs ml-[90px] font-[Albert Sans] xs:text-[10px] xs:pt-[5px] xs:ml-[70px]'>Nosso time focado no seu problema, sempre.</p>
                </div>
                <div class='w-[444px] h-[105px] mt-5 ml-[180px] mb-3 bg-[#3D4B58] xs:w-[280px] xs:h-[90px] xs:ml-[25px] 1xs:ml-10 1xs:w-[350px] md:w-[330px] md:ml-[30px] lg:ml-10 2xl:ml-[320px]'
                      style='clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%);'   
                >
                    <img class='ml-5 pt-[25px] xs:w-[30px]' src='new_tools.svg'></img>
                    <p class='font-semibold tx-base text-white font-[Albert Sans] ml-[90px] mt-[-50px] xs:text-xs xs:whitespace-[nowrap] xs:ml-[70px]'>Somos fabricantes</p>
                    <p class='text-[#9CA3AF] text-xs ml-[90px] font-[Albert Sans] xs:text-[10px] xs:pt-[5px] xs:ml-[70px]'>Para garantir boa performance e bom preço.</p>
                </div>
                
            </div>
        </div>
        <div class='container mx-auto p-4 mt-[150px] xs:mt-0 xs:mb-0 1xs:mt-0 1xs:h-[600px] md:h-[550px]'>
           <h1 class='text-[36px] font-normal xs:text-[20px] 1xs:text-2xl'>PRODUTOS EM{' '} 
           <span style={{ fontWeight: 'bold' }}>DESTAQUE</span>
           </h1> 
            <div class='flex items-center group'>
                <a href='/productlist'>
                    <p
                        style={{border: "solid 1px black", padding: "6px"}}
                        class="w-[130px] mt-[-40px] ml-[1050px] h-[36px] text-center font-semibold group-hover:bg-[#E9F408] md:ml-[610px] lg:ml-[850px]"
                    >
                         VER TODOS
                    </p>
                </a>    
                <svg class='ml-[-16px] mt-[-40px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                    <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                        <path id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#29323a"/>
                        <path id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#29323a"/>
                    </g>
                </svg>
            </div>
           <div class="grid lg:flex lg:grid-cols-4 lg:gap-2 lg:mt-4 md:grid-cols-4 gap-2 mt-4 xs:grid-cols-2 xs:gap-5 1xs:grid-cols-2 1xs:gap-5 xl:flex 2xl:flex">
           <div class="group section border border-solid border-[#E6E6E6] w-[260px] h-[299px] relative transition duration-300 ease-in-out xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]"
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:mt-[5px] 1xs:ml-[5px] ' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] 1xs:mt-[60px] group">
                        <img class='xs:w-[90px] xs:absolute 1xs:w-[150px] 1xs:absolute md:w-[160px] md:absolute md:mt-20 ' src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group xs:mt-[35px] xs:ml-[45px] xs:pt-[10px] xs:text-xs 1xs:text-base 1xs:ml-[50px] 1xs:pt-[30px] md:pl-5 md:pt-[90px]'>EXTRUSORA</p>
                    
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
                <div class="group section border border-solid border-[#E6E6E6] w-[260px] h-[299px] relative transition duration-300 ease-in-out xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]"
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:mt-[5px] 1xs:ml-[5px] ' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] 1xs:mt-[60px] group">
                        <img class='xs:w-[90px] xs:absolute 1xs:w-[150px] 1xs:absolute md:w-[160px] md:absolute md:mt-20 ' src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group xs:mt-[35px] xs:ml-[45px] xs:pt-[10px] xs:text-xs 1xs:text-base 1xs:ml-[50px] 1xs:pt-[30px] md:pl-5 md:pt-[90px]'>SERRAS</p>
                    
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
                <div class="group section border border-solid border-[#E6E6E6] w-[260px] h-[299px] relative transition duration-300 ease-in-out xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]"
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:mt-[5px] 1xs:ml-[5px] ' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] 1xs:mt-[60px] group">
                        <img class='xs:w-[90px] xs:absolute 1xs:w-[150px] 1xs:absolute md:w-[160px] md:absolute md:mt-20 ' src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group xs:mt-[35px] xs:ml-[35px] xs:pt-[10px] xs:text-xs 1xs:text-base 1xs:ml-[30px] 1xs:pt-[30px] md:pl-2 md:pt-[90px] md:text-lg'>ESCOVA EMBORRACHADA</p>
                    
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
                <div class="group section border border-solid border-[#E6E6E6] w-[260px] h-[299px] relative transition duration-300 ease-in-out xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]"
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:mt-[5px] 1xs:ml-[5px] ' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] 1xs:mt-[60px] group">
                        <img class='xs:w-[90px] xs:absolute 1xs:w-[150px] 1xs:absolute md:w-[160px] md:absolute md:mt-20 ' src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group xs:mt-[35px] xs:ml-[45px] xs:pt-[10px] xs:text-xs 1xs:text-base 1xs:ml-[50px] 1xs:pt-[30px] md:pl-5 md:pt-[90px]'>VASELINA</p>
                    
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
                
           </div>
           </div>
    </div>
   )

}