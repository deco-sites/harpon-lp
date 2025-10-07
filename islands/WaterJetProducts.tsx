import {useState, useEffect } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from 'https://cdn.skypack.dev/axios@1.5.0';
import WaterJetProductSearch from "deco-sites/harpon-lp/islands/WaterJetProductSearch.tsx";
import LandingPageFooter from "deco-sites/harpon-lp/components/landingpage/Footer.tsx";
import { Picture } from "apps/website/components/Picture.tsx";

interface Product {
    id: string;
    name: string
    description: string;
    price: number;
    code: string;
    image: string;
}

const WaterJetProductList : FunctionalComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.post('https://backend-harpon-260311756054.southamerica-east1.run.app/waterjet-products/get-waterjet-products-by-categories', {
            categories: ["ABRASIVOS", "ACESSÓRIOS", "FILTROS", "KIT VÁLVULAS", "TUBOS"]
        })
        .then((response: any) => {
            const allProducts = response.data.flat();
            const seen = new Map();
            const uniqueProducts = allProducts.filter((prod: Product) => {
                if (seen.has(prod.name)) {
                    return false;
                }
                seen.set(prod.name, true);
                return true;
            });
            setProducts(uniqueProducts.sort((a, b) => a.name.trim().localeCompare(b.name.trim(), 'pt-BR', { sensitivity: 'base' })));
        })
        .catch((error: any) => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    const handleProductClick = (productName: string) => {
        const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
        const encodedProductName = encodeURIComponent(formattedProductName);
        return `waterjet/${encodedProductName}`;
    }
 
    return (
        <>
            <Picture>
                <div className="absolute w-[500px] pl-[130px] pt-[150px] pb-[150px] text-[42px] font-[Albert Sans] font-normal text-white xs:w-min xs:text-2xl xs:mt-[90px] xs:pl-[80px] 1xs:text-[26px] 1xs:w-min 1xs:mt-[90px] 1xs:pl-[100px] sm:pl-5 sm:mt-[100px] md:pl-[50px]">
                    PARA EMPRESAS E PROJETOS{' '}
                    <span style={{ fontWeight: 'bold', color: '#e9f507' }}>QUE NUNCA PARAM</span>
                </div>
                <img class="object-cover w-full h-600px xs:h-[600px]" style="height: 500px" src='waterjet-harpon.png' alt='Máquina de corte'></img>
            </Picture>  
            
            <div class='xs:overflow-x-hidden 1xs:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden'>
                <div class='inline-flex items-baseline -mt-20'>
                    <div class='inline-flex items-center ml-[139px] xs:mt-3 xs:ml-[10px] 1xs:mt-3 1xs:ml-[10px] sm:mt-[50px] sm:ml-5 md:mt-0 md:ml-5 lg:mt-20 lg:ml-5 xl:mt-20 xl:ml-5'>
                        <a href='/'><p class='font-bold'>Home &#62;</p></a>
                        <p class='text-[#29323A]'>Todos os produtos</p>
                    </div>
                    
                    <div class="inline-flex items-center ml-[260px] mt-[100px] xs:mt-5 xs:ml-[-120px] 1xs:mt-5 1xs:ml-[-120px] sm:ml-[50px] md:ml-10 lg:ml-20">
                        <WaterJetProductSearch />
                    </div>
                </div>
                
            </div>
            
            {loading ? (
                <div class='flex justify-center items-center h-full'>
                    <img src='loading.gif' alt='Carregando...' class='w-5' />
                </div>
            ): (
                <div class="w-fit grid gap-[1.5rem] mt-[50px] mb-[100px] mx-auto xs:grid-cols-2 xs:gap-3 xs:ml-3 1xs:grid-cols-2 1xs:gap-3 1xs:ml-3 sm:grid-cols-2 sm:gap-4 sm:w-max md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5 xl:grid-cols-4 xl:gap-6 2xl:grid-cols-5">
                    {products.map(prod => (
                        <a href={handleProductClick(prod.name)} onClick={() => handleProductClick(prod.id)} key={prod.id}>
                            <div class="w-[260px] h-[299px] hover:border-[#E9F408] xs:w-[160px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[160px] sm:w-[220px] sm:h-[250px] md:h-[200px] md:w-[220px] lg:w-[220px] lg:h-[220px] xl:w-[240px] xl:h-[260px] group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out">
                                <div class="flex items-center justify-center mb-2 mt-[15px] group xs:mt-[15px] 1xs:mt-2">
                                    <img class='h-[160px] xs:w-[75px] xs:h-[60px] 1xs:w-[90px] 1xs:h-20 sm:h-[120px] md:h-[100px] lg:w-[150px] lg:h-[90px] xl:h-[140px]' src={prod.image}></img>
                                </div>
                                <p class='mt-5 font-bold text-[20px] text-center group xs:mt-0 xs:text-sm 1xs:mt-3 1xs:text-sm sm:text-center md:text-lg lg:text-xl lg:mt-3'>{prod.name}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
            
            <LandingPageFooter />
        </>
    )
}

export default WaterJetProductList;