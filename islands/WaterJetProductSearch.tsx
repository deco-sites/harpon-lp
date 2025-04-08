import { useState, useEffect, useRef } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from 'https://cdn.skypack.dev/axios@1.5.0';

interface WaterJetProductSearch {
    products: Product[];
}

interface Product {
    id: string;
    name: string;
}

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const WaterJetProductSearch: FunctionalComponent = () => {
    const [term, setTerm] = useState<string>('');
    const [results, setResults] = useState<WaterJetProductSearch>({ products: [] });
    const [loading, setLoading] = useState<boolean>(false);
    const debouncedTerm = useDebounce(term, 300);


    const searchContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSearch = async () => {
          if (debouncedTerm.length > 0) {
            setLoading(true);
            try {
              const response = await axios.get<WaterJetProductSearch>(`https://backend-harpon-260311756054.southamerica-east1.run.app/search/water-jet?term=${debouncedTerm}`);
              setResults(response.data);
            } catch (error) {
              console.error('Erro ao buscar:', error);
            } finally {
              setLoading(false);
            }
          } else {
            setResults({ products: [] });
          }
        };
    
        handleSearch();
      }, [debouncedTerm]);

    // Fecha a pesquisa quando o usuário clica fora do input e dos resultados
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setTerm(''); // Fecha a pesquisa
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleProductClick = (productName: string) => {
        let newSelectedProduct = [productName];
        localStorage.setItem('selectedProduct', newSelectedProduct);
    
        // Converte o nome em letras minúsculas e separa pelos hífens
        const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
        const encodedProductName = encodeURIComponent(formattedProductName);
    
        return `/${encodedProductName}`;
    }
    

    return (
        <div ref={searchContainerRef} className="relative flex items-center"> {/* Envolve tudo com a ref */}
            <svg class='mr-[-30px] z-10 xs:mt-[50px] 1xs:mt-[50px] ' xmlns="http://www.w3.org/2000/svg" width="16.419" height="16.423" viewBox="0 0 16.419 16.423">
                <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.726,19.727,16.16,15.118a6.508,6.508,0,1,0-.988,1L19.709,20.7a.7.7,0,0,0,.992.026A.707.707,0,0,0,20.726,19.727Zm-9.68-3.553a5.139,5.139,0,1,1,3.634-1.505A5.107,5.107,0,0,1,11.046,16.174Z" transform="translate(-4.5 -4.493)" fill="#29323A"/>
            </svg>
            <input 
                class="w-[444px] h-10 pl-[70px] text-left bg-[#F2F2F2] text-[#29323A] text-sm xs:block xs:text-base xs:w-[350px] xs:mt-[50px] 1xs:block 1xs:text-lg 1xs:w-[400px] 1xs:mt-[50px] sm:w-[300px] md:w-[280px]" 
                type="text" 
                id="MagnifyingGlass" 
                placeholder="Busque algum produto" 
                value={term}
                onInput={(e) => setTerm((e.target as HTMLInputElement).value)}
            />
            {term && (
                <div className="absolute top-5 -left-[14px] w-[27.5rem] z-20 mt-5 h-[260px] bg-white text-black p-4 rounded shadow-md overflow-y-auto xs:ml-[95px] xs:w-[240px] 1xs:ml-[95px] 1xs:w-[265px] md:ml-[64.6%] md:w-[240px] lg:ml-[63.5%] lg:w-[320px]">
                    {loading ? (
                        <div className='flex justify-center items-center h-full'>
                            <img src='loading.gif' alt='Carregando...' className='w-5' />
                        </div>
                    ) : (
                        <>
                            <h3 className='font-bold'>Produtos</h3>
                            <ul>
                                {results.products.length > 0 ? results.products.map(product => (
                                    <li key={product.id}>
                                        <a 
                                        class="pointer hover:text-[#E9F408]"
                                        href ={`/waterjet${handleProductClick(product.name)}`} 
                                        onClick={() => handleProductClick(product.id)}>
                                            {product.name}
                                        </a>
                                    </li>
                                )) : <li>Nenhum produto encontrado</li>}
                            </ul>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default WaterJetProductSearch;
