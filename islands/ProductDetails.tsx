import { useState, useEffect } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from "https://cdn.skypack.dev/axios";

interface Product {
    id: string;
    name: string
    description: string;
    price: number;
    code: string;
    image: string;
    variations: any[]
}

interface Variations {
    name: string;
    description: string;
    price: number;
}

const ProductDetails : FunctionalComponent = () => {
    const [product, setProduct] = useState<Product>({});
    const [variations, setVariations] = useState<any[]>([])

    useEffect(() => {
        // Obtém a string armazenada no localStorage
        const selectedProduct= localStorage.getItem('selectedProduct')
        // Verifica se a string existe e não está vazia
        if (selectedProduct) {
            axios.get(`https://interface-web-backend-hjk3p7rq3q-rj.a.run.app/harpon-products/get-product-information/${selectedProduct}`)
                .then((response: any) => {
                    setProduct(response.data);
                    setVariations(response.data.variation);
                }).catch((error: any) => {
                    console.log(error);
                });
        }
    }, [])

    useEffect(()=> {
        console.log(product)
        console.log(product.variations)
    }, [product])

    return (
        <>
            <div class='flex ml-[139px] mt-[150px] xs:mt-[30px] xs:ml-0 1xs:mt-[30px] 1xs:ml-0 md:mt-[60px] md:ml-[100px] lg:ml-5'>
        <a href='/'><p class='font-bold'>Home &#62;</p></a> <a href='productlist'><p class='font-bold'>Todos os Produtos &#62;</p></a> <span class='ml-2'>{product.name}</span>
      </div>
      <div class='ml-[783px] xs:ml-0 1xs:ml-0 md:ml-[100px] lg:ml-[672px]'>
        <h1 class='text-4xl text-[#29323A] font-bold xs:text-[28px] 1xs:text-3xl'>{product.name}</h1>
      </div>
      <div class='ml-[783px] mt-[-50px] xs:ml-0 xs:mt-[320px] 1xs:mt-[320px] 1xs:ml-0 md:ml-[100px] md:mt-[600px] lg:ml-[672px]'>
      {product.description && (
    <>
        <h2 class='text-[#29323A] text-base font-bold'>Descrição:</h2>
        <p class='text-sm text-[#29323A] mb-5 w-[490px] xs:w-[350px] 1xs:w-[350px] lg:w-auto'>{product.description}</p>
    </>
)}

        <p class='inline text-[#29323A] text-base font-bold'>Código:</p>
        <span class='text-sm ml-[10px]'>{product.code}</span>
        <p class='text-[#29323A] text-base font-bold mt-5 mb-[10px]'>Selecione o tamanho:</p>
        <select class='border border-solid bg-[#F2F2F2] w-[444px] h-10 text-sm mb-[30px] xs:w-[350px] 1xs:w-[380px] lg:w-[320px]'>
                {/* {variations.map(vari =>(
                    <option key={vari.id} class='text-sm text-[#29323A]'>{vari.name}</option>
                ))} */}
            </select>
            <div class='flex gap-5 md:absolute'>
              <svg class='xs:w-[120px] 1xs:w-[200px]' xmlns="http://www.w3.org/2000/svg" width="168" height="48" viewBox="0 0 168 48">
              <g id="botão_comprar" data-name="botão comprar" transform="translate(-783 -695)">
                <g id="Retângulo_19" data-name="Retângulo 19" transform="translate(783 695)" fill="none" stroke="#c8c8ca" stroke-width="1">
                  <rect width="168" height="48" stroke="none"/>
                  <rect x="0.5" y="0.5" width="167" height="47" fill="none"/>
                </g>
                <text id="comprar" transform="translate(826 725)" fill="#c8c8ca" font-size="16" font-family="AlbertSans-Bold, Albert Sans" font-weight="700"><tspan x="0" y="0">COMPRAR</tspan></text>
               </g>
              </svg>
              <div class='group'>
              <svg class='xs:w-[180px] 1xs:w-[230px] lg:w-[180px]'  id="botão_cotar" data-name="botão cotar" xmlns="http://www.w3.org/2000/svg" width="260"    height="48" viewBox="0 0 260 48">
               <rect class='group-hover:fill-[#E9F408]' id="Retângulo_19" data-name="Retângulo 19" width="260" height="48" fill="#29323a"/>
                <text class=' group-hover:fill-[#29323A] lg:text-xl' id="cotar" transform="translate(102 30)" fill="#fff" font-size="16" font-family="AlbertSans-Bold, Albert Sans" font-weight="700"><tspan x="0" y="0">COTAR</tspan></text>
              </svg>
              </div>
            </div>
      </div>
      <div class='border border-solid text-[#E6E6E6] w-[536px] h-[427px] absolute mt-[250px] ml-[231px] xs:ml-0 xs:mt-[180px] xs:w-[350px] xs:h-[250px] 1xs:ml-0 1xs:mt-[180px] 1xs:w-[380px] 1xs:h-[250px] md:ml-[100px] lg:ml-[120px]'
      
      >
        <img class='max-h-[350px] max-w-[200px] mt-[50px] ml-[90px] xs:w-[270px] xs:ml-10 xs:mt-10 1xs:w-[270px] 1xs:ml-10 1xs:mt-10' src={product.image}></img>
      </div>
      {/* <div class='inline-grid gap-5 absolute mt-[250px] ml-[139px] xs:inline-flex xs:w-[65px] xs:h-[65px] xs:mt-[450px] xs:ml-0 1xs:inline-flex 1xs:w-[65px] 1xs:h-[65px] 1xs:mt-[450px] 1xs:ml-0 md:inline-flex md:ml-[100px] md:mt-[710px] lg:ml-5'>
        <img class='w-[76px] md:w-[100px]' src={product.image}></img>
        <img class='w-[76px] md:w-[100px]' src={product.image}></img>
        <img class='w-[76px] md:w-[100px]' src={product.image}></img>
        <img class='w-[76px] md:w-[100px]' src={product.image}></img>
      </div> */}
      <div class='mx-auto p-4 mt-[139px] mb-[100px] ml-[139px] xs:ml-0 xs:mt-5 1xs:ml-0 1xs:mt-5 md:ml-0 lg:ml-5'>
           <h1 class='text-[36px] font-normal xs:text-xl 1xs:text-2xl md:ml-[100px]'>VOCÊ TAMBÉM{' '} 
           <span style={{ fontWeight: 'bold' }}>PODE GOSTAR</span> 
           </h1> 
            <div class='flex items-center group xs:hidden 1xs:hidden md:hidden'>
                <p
                    style={{border: "solid 1px black", padding: "6px"}}
                    class="w-[130px] mt-[-40px] ml-[930px] h-[36px] text-center font-semibold group-hover:bg-[#E9F408] lg:ml-[780px]" 
                >
                    VER TODOS
                </p>
                <svg class='ml-[-16px] mt-[-40px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                    <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                        <path id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#29323a"/>
                        <path id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#29323a"/>
                    </g>
                </svg>
            </div>
           <div class="grid grid-cols-4 gap-2 mt-4 xs:w-max xs:grid-cols-2 1xs:w-max 1xs:grid-cols-2 md:grid-cols-2 md:ml-[100px]">
                <div class="w-[260px] h-[299px] xs:w-[150px] xs:h-[180px] 1xs:w-[170px] 1xs:h-[180px] lg:w-[220px] group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:w-[70px] 1xs:ml-[5px] 1xs:mt-[5px] md:w-[120px]' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group xs:mt-5 1xs:mt-5">
                        <img class='xs:w-[120px] 1xs:w-[120px] md:w-[200px]' src='flanges.png '></img>
                    </div>
                    
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans] group md:text-[28px]'>FLANGES</p>
                    
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
                <div class="w-[260px] h-[299px] xs:w-[150px] xs:h-[180px] 1xs:w-[170px] 1xs:h-[180px] lg:w-[220px] section border border-solid border-[#E6E6E6]  relative"
                    
                >
                    <div>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:w-[70px] 1xs:ml-[5px] 1xs:mt-[5px] md:w-[120px]' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] xs:mt-5 1xs:mt-5">
                        <img class='xs:w-[120px] 1xs:w-[120px] md:w-[200px]' src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans] md:text-[28px]'>FLANGES</p>
                    
                </div>
                <div class="w-[260px] h-[299px] xs:w-[150px] xs:h-[180px] 1xs:w-[170px] 1xs:h-[180px] lg:w-[220px] section border border-solid border-[#E6E6E6]  relative"
                    
                >
                    <div>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:w-[70px] 1xs:ml-[5px] 1xs:mt-[5px] md:w-[120px]' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] xs:mt-5 1xs:mt-5">
                        <img class='xs:w-[120px] 1xs:w-[120px] md:w-[200px]' src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans] md:text-[28px]'>FLANGES</p>
                </div>
                <div class="w-[260px] h-[299px] xs:w-[150px] xs:h-[180px] 1xs:w-[170px] 1xs:h-[180px] lg:w-[220px] section border border-solid border-[#E6E6E6]  relative"
                    
                >
                    <div>
                        <img class='mt-5 ml-5 xs:w-[70px] xs:ml-[5px] xs:mt-[5px] 1xs:w-[70px] 1xs:ml-[5px] 1xs:mt-[5px] md:w-[120px]' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] xs:mt-5 1xs:mt-5">
                        <img class='xs:w-[120px] 1xs:w-[120px] md:w-[200px]' src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans] md:text-[28px]'>FLANGES</p>
                </div>
           </div>
        </div>
        </>
    )
}

export default ProductDetails;