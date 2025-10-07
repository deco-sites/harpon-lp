import { useState, useEffect } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from "https://cdn.skypack.dev/axios@1.5.0";

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
    image?: string;
}

const WaterJetProductDetails : FunctionalComponent = () => {
    const [product, setProduct] = useState<Product>({});
    const [variations, setVariations] = useState<Variations[]>([]);
    const [selectedVariation, setSelectedVariation] = useState<Variations | null>(null);
    const [loading, setLoading] = useState(true);

    // Oculta o footer quando o componente é montado
    useEffect(() => {
        const footer = Array.from(document.querySelectorAll('section')).find(
            section => section.textContent?.includes('+55(11)3658')
        ) as HTMLElement;

        footer.style.display = 'none';
        return () => { footer.style.display = 'block'; };
    }, []);

    useEffect(() => {
        const slug = window.location.pathname.split('/').pop();
        if (slug) {
            const productName = decodeURIComponent(slug).replace(/-/g, ' ');
            
            axios.post('https://backend-harpon-260311756054.southamerica-east1.run.app/waterjet-products/get-waterjet-products-by-categories', {
                categories: ["ABRASIVOS", "ACESSÓRIOS", "FILTROS", "KIT VÁLVULAS", "TUBOS"]
            })
            .then((response: any) => {
                const allProducts = response.data.flat().filter((prod: Product, i: number, arr: Product[]) => 
                    arr.findIndex(p => p.id === prod.id) === i
                );
                
                const foundProduct = allProducts.find((p: Product) => 
                    p.name.toLowerCase() === productName.toLowerCase()
                );
                
                if (foundProduct) {
                    axios.get(`https://backend-harpon-260311756054.southamerica-east1.run.app/waterjet-products/get-product-information/${foundProduct.id}`)
                        .then((detailResponse: any) => {
                            setProduct(detailResponse.data);
                            const vars = detailResponse.data.variations || [];
                            setVariations(vars);
                            if (vars.length > 0) setSelectedVariation(vars[0]);
                        })
                        .catch((error: any) => {
                            console.log(error);
                        });
                }
            })
            .catch((error: any) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
        }
    }, [])

    const handleVariationChange = (e: Event) => {
        const selected = variations[(e.target as HTMLSelectElement).selectedIndex];
        if (selected) setSelectedVariation(selected);
    };

    const handleClick = () => {
        const mensagem = `Gostaria de solicitar um orçamento deste produto: ${product.name}.`;
        const mensagemCodificada = encodeURIComponent(mensagem);
        globalThis.open(`https://api.whatsapp.com/send?phone=5511977205417&text=${mensagemCodificada}`, '_blank');

    };

    return (
        <>
            {loading ? (
                <div class='flex justify-center items-center h-full'>
                <img src='loading.gif' alt='Carregando...' class='w-20' />
                </div>
            ): (
                <>
                <div class='flex ml-[139px] mt-[50px] xs:mt-0 xs:-ml-3 xs:whitespace-nowrap xs:text-sm 1xs:mt-0 1xs:-ml-3 1xs:whitespace-nowrap 1xs:text-sm 1xs:w-[365px] md:mt-0 md:ml-0 lg:ml-[50px] lg:mt-0 lg:text-2xl'>
                  <a href='/'><p class='font-bold'>Home &#62;</p></a> <a href='/'><p class='font-bold'>Todos os produtos &#62;</p></a> <span class='xs:overflow-x-hidden 1xs:overflow-x-hidden'>{product.name}</span>
                </div><div class='ml-[683px] -mt-3 xs:ml-0 1xs:ml-0 md:ml-0 lg:ml-[633px]'>
                    <h1 class='text-4xl text-[#29323A] font-bold xs:text-xl 1xs:text-xl md:ml-[420px] md:mt-[30px]'>{product.name}</h1>
                  </div>
                  <div class='ml-[683px] mt-[-50px] xs:ml-0 xs:mt-[240px] 1xs:mt-[260px] 1xs:ml-0 md:ml-[400px] md:mt-0 lg:ml-[633px] '>
                    {(selectedVariation?.description || product.description) && (
                      <>
                        <h2 class='text-[#29323A] text-base font-bold md:ml-5 lg:text-lg'>Descrição:</h2>
                        <p class='text-sm text-[#29323A] mb-5 w-[490px] xs:w-[350px] 1xs:w-[350px] md:ml-5 lg:w-auto lg:text-lg'>
                          {selectedVariation?.description || product.description}
                        </p>
                      </>
                    )}
                    {variations.length > 0 && (
                      <>
                        <p className='text-[#29323A] text-base font-bold mb-[10px] mt-5 md:ml-5 lg:text-lg'>Selecione a variação:</p>
                        <select 
                          className='border border-solid bg-[#F2F2F2] w-[444px] h-10 text-sm mb-5 xs:w-[350px] 1xs:w-[380px] md:ml-5 md:w-[300px] lg:w-[320px]'
                          onChange={handleVariationChange}
                        >
                          {variations.map(vari => (
                            <option key={vari.id} value={vari.id} className='text-sm text-[#29323A]'>{vari.name}</option>
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
                        <div class='group ml-[80px] mt-10 cursor-pointer xs:mt-3 1xs:mt-3 md:ml-[50px] lg:ml-[50px]'
                          onClick={handleClick}
                        >
                          <svg class='xs:w-[180px] 1xs:w-[230px] lg:w-[230px]' id="botão_cotar" data-name="botão cotar" xmlns="http://www.w3.org/2000/svg" width="260" height="48" viewBox="0 0 260 48">
                            <rect class='group-hover:fill-[#E9F408]' id="Retângulo_19" data-name="Retângulo 19" width="260" height="48" fill="#29323a" />
                            <text class=' group-hover:fill-[#29323A] lg:text-xl' id="cotar" transform="translate(102 30)" fill="#fff" font-size="16" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">COTAR</tspan></text>
                          </svg>
                        </div>
                      </a>  
                    </div>
                  </div>
                  <div class='border border-solid text-[#E6E6E6] w-[536px] h-[427px] absolute mt-[100px] ml-[131px] flex items-center justify-center xs:ml-0 xs:mt-[100px] xs:w-[350px] xs:h-[250px] 1xs:ml-0 1xs:mt-[120px] 1xs:w-[380px] 1xs:h-[250px] md:ml-0 md:w-[400px] md:h-[300px] lg:ml-[50px]'>
                    <img class='max-h-[400px] xs:w-[180px] xs:h-[180px] 1xs:w-[250px] 1xs:h-[180px] md:h-[250px]' src={selectedVariation?.image || product.image}></img>
                  </div>
                </>
            )}
        </>
    )
}

export default WaterJetProductDetails;