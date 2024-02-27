export default function FeaturedProducts() {
    return (
        <div class='container mx-auto p-4 mt-[150px] mb-[-230px] xs:mt-0 xs:mb-0 1xs:mt-0'>
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
           <div class="grid lg:flex lg:grid-cols-4 lg:gap-2 lg:mt-4 md:grid-cols-4 gap-2 mt-4 xs:grid-cols-2 xs:gap-5 1xs:grid-cols-2 1xs:gap-5 xl:flex">
                <div class="section border border-solid border-[#E6E6E6] w-[260px] h-[299px]  relative xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]"
                >
                    <div>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:mt-[5px] 1xs:ml-[5px] ' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] 1xs:mt-[60px]">
                        <img class='xs:w-[90px] xs:absolute 1xs:w-[150px] 1xs:absolute md:w-[160px] md:absolute md:mt-20 ' src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans] xs:mt-[35px] xs:ml-5 xs:text-xs  1xs:text-base 1xs:ml-[25px] md:ml-[15px]'>EXTRUSORA</p>
                    
                </div>
                <div class="section border border-solid border-[#E6E6E6] w-[260px] h-[299px] relative xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]"
                >
                    <div>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:mt-[5px] 1xs:ml-[5px] ' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] 1xs:mt-[60px]">
                        <img class='xs:w-[90px] xs:absolute 1xs:w-[150px] 1xs:absolute md:w-[160px] md:absolute md:mt-20 ' src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans] xs:mt-[35px] xs:ml-[30px] xs:text-xs 1xs:text-base 1xs:ml-[25px] md:ml-[15px]'>SERRAS</p>
                </div>
                <div class="section border border-solid border-[#E6E6E6] w-[260px] h-[299px] relative xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]"
                >
                    <div>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:mt-[5px] 1xs:ml-[5px] ' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] 1xs:mt-[60px]">
                        <img class='xs:w-[90px] xs:absolute 1xs:w-[150px] 1xs:absolute md:w-[160px] md:absolute md:mt-20 ' src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans] xs:mt-[35px] xs:ml-[10px] xs:text-xs 1xs:text-base 1xs:ml-5 md:ml-[0px] md:text-lg'>ESCOVA EMBORRACHADA</p>
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
           </div>
    )
}