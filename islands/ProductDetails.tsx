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
    variations: Variations[];
}

interface Variations {
    name: string;
    description: string;
    price: number;
}

const ProductDetails : FunctionalComponent = () => {
    const [product, setProduct] = useState<Product>({});
    const [variations, setVariations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Obtém a string armazenada no localStorage
        const selectedProduct= localStorage.getItem('selectedProduct')
        // Verifica se a string existe e não está vazia
        if (selectedProduct) {
            axios.get(`https://interface-web-backend-hjk3p7rq3q-rj.a.run.app/harpon-products/get-product-information/${selectedProduct}`)
                .then((response: any) => {
                    setProduct(response.data);
                    setVariations(response.data.variations);
                }).catch((error: any) => {
                    console.log(error);
                })
                .finally(()=> {
                    setLoading(false)
                })
        }
    }, [])

    useEffect(()=> {
        console.log(product)
        console.log(variations)
    }, [product])

    const handleClick = () => {
        const mensagem = `Gostaria de solicitar um orçamento deste produto: ${product.name}.`;
        const mensagemCodificada = encodeURIComponent(mensagem);
        globalThis.open(`https://api.whatsapp.com/send?phone=5511977205601&text=${mensagemCodificada}`, '_blank');

    };

    return (
        <>
            {loading ? (
                <div class='flex justify-center items-center h-full'>
                <img src='loading.gif' alt='Carregando...' class='w-20' />
                </div>
            ): (
                <>
                <div class='flex ml-[139px] mt-[50px] xs:mt-[30px] xs:ml-0 1xs:mt-[30px] 1xs:ml-0 md:mt-[60px] md:ml-[100px] lg:ml-5'>
                  <a href='/'><p class='font-bold'>Home &#62;</p></a> <a href='productlist'><p class='font-bold'>Todos os produtos &#62;</p></a> <span class='ml-2'>{product.name}</span>
                </div><div class='ml-[683px] -mt-10 xs:ml-0 1xs:ml-0 md:ml-[100px] lg:ml-[672px]'>
                    <h1 class='text-4xl text-[#29323A] font-bold xs:text-[28px] 1xs:text-3xl'>{product.name}</h1>
                  </div><div class='ml-[683px] mt-[-50px] xs:ml-0 xs:mt-[320px] 1xs:mt-[320px] 1xs:ml-0 md:ml-[100px] md:mt-[600px] lg:ml-[672px]'>
                    {product.description && (
                      <>
                        <h2 class='text-[#29323A] text-base font-bold'>Descrição:</h2>
                        <p class='text-sm text-[#29323A] mb-5 w-[490px] xs:w-[350px] 1xs:w-[350px] lg:w-auto'>{product.description}</p>
                      </>
                    )}

                    <p class='inline text-[#29323A] text-base font-bold'>Código:</p>
                    <span class='text-sm ml-[10px]'>{product.code}</span>
                    {variations && variations.length > 0 && (
                      <>
                        <p className='text-[#29323A] text-base font-bold mt-5 mb-[10px]'>Selecione o tamanho:</p>
                        <select className='border border-solid bg-[#F2F2F2] w-[444px] h-10 text-sm mb-[30px] xs:w-[350px] 1xs:w-[380px] lg:w-[320px]'>
                          {variations.map(vari => (
                            <option key={vari.id} value={vari.id} className='text-sm text-[#29323A]'>{vari.name}, {vari.description}</option>
                          ))}
                        </select>
                      </>
                    )}
                    <div class='flex gap-5 md:absolute'>
                                    {/* <svg class='xs:w-[120px] 1xs:w-[200px]' xmlns="http://www.w3.org/2000/svg" width="168" height="48" viewBox="0 0 168 48">
                    <g id="botão_comprar" data-name="botão comprar" transform="translate(-783 -695)">
                    <g id="Retângulo_19" data-name="Retângulo 19" transform="translate(783 695)" fill="none" stroke="#c8c8ca" stroke-width="1">
                        <rect width="168" height="48" stroke="none"/>
                        <rect x="0.5" y="0.5" width="167" height="47" fill="none"/>
                    </g>
                    <text id="comprar" transform="translate(826 725)" fill="#c8c8ca" font-size="16" font-family="AlbertSans-Bold, Albert Sans" font-weight="700"><tspan x="0" y="0">COMPRAR</tspan></text>
                    </g>
                    </svg> */}
                      <a>
                        <div class='group ml-[80px] mt-10 cursor-pointer'
                          onClick={handleClick}
                        >
                          <svg class='xs:w-[180px] 1xs:w-[230px] lg:w-[180px]' id="botão_cotar" data-name="botão cotar" xmlns="http://www.w3.org/2000/svg" width="260" height="48" viewBox="0 0 260 48">
                            <rect class='group-hover:fill-[#E9F408]' id="Retângulo_19" data-name="Retângulo 19" width="260" height="48" fill="#29323a" />
                            <text class=' group-hover:fill-[#29323A] lg:text-xl' id="cotar" transform="translate(102 30)" fill="#fff" font-size="16" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">COTAR</tspan></text>
                          </svg>
                        </div>
                      </a>  
                    </div>
                  </div>
                  <div class='border border-solid text-[#E6E6E6] w-[536px] h-[427px] absolute mt-[100px] ml-[131px] xs:ml-0 xs:mt-[180px] xs:w-[350px] xs:h-[250px] 1xs:ml-0 1xs:mt-[180px] 1xs:w-[380px] 1xs:h-[250px] md:ml-[100px] lg:ml-[120px]'

                  >
                    <img class='max-h-[400px]  xs:w-[270px] xs:ml-10 xs:mt-10 1xs:w-[270px] 1xs:ml-10 1xs:mt-10' src={product.image}></img>
                  </div>
                </>
            )}
        </>
    )
}

export default ProductDetails;