import { useState, useEffect } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from 'https://cdn.skypack.dev/axios@1.5.0';

interface SearchResults {
  categories: Category[];
  products: Product[];
}

interface Category {
  id: number;
  name: string;
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

export const SearchResult: FunctionalComponent = () => {
  const [term, setTerm] = useState<string>('');
  const [results, setResults] = useState<SearchResults>({ categories: [], products: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedTerm = useDebounce(term, 300); // 300ms debounce delay
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const handleSearch = async () => {
      if (debouncedTerm.length > 0) {
        setLoading(true);
        try {
          const response = await axios.get<SearchResults>(`https://backend-harpon-260311756054.southamerica-east1.run.app/search?term=${debouncedTerm}`);
          setResults(response.data);
        } catch (error) {
          console.error('Erro ao buscar:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults({ categories: [], products: [] });
      }
    };

    handleSearch();
  }, [debouncedTerm]);

  const handleCategoryClick = (categoryName: string) => {
    let newSelectedCategories = [categoryName]
    localStorage.setItem('selectedCategories', newSelectedCategories[0])
    const encodedCategoryName = encodeURIComponent(categoryName);
    return `/produtos?=${encodedCategoryName}`;
}

const handleProductClick = (productName: string) => {
  let newSelectedProduct = [productName];
  localStorage.setItem('selectedProduct', newSelectedProduct);

  // Converte o nome em letras minúsculas e separa pelos hífens
  const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
  const encodedProductName = encodeURIComponent(formattedProductName);

  return `/${encodedProductName}`;
}

  return (
    <>
      <div className="inline-flex items-center mt-5 ml-[77%] z-10 xs:ml-[100px] 1xs:ml-[100px] 1xs:w-[260px] sm:ml-[20%] md:ml-[67%] lg:ml-[65%] xl:ml-[74%]">
        <svg className='mr-[-15px] z-10 pointer-events-auto xs:w-[30px] xs:h-5 1xs:w-[35px] 1xs:h-[25px]' xmlns="http://www.w3.org/2000/svg" width="16.419" height="16.423" viewBox="0 0 16.419 16.423">
          <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.726,19.727,16.16,15.118a6.508,6.508,0,1,0-.988,1L19.709,20.7a.7.7,0,0,0,.992.026A.707.707,0,0,0,20.726,19.727Zm-9.68-3.553a5.139,5.139,0,1,1,3.634-1.505A5.107,5.107,0,0,1,11.046,16.174Z" transform="translate(-4.5 -4.493)" fill="#fff" />
        </svg>
        <input
          className="w-80 h-10 pl-[50px] ml-[-20px] text-left bg-[#3D4B58] text-[#C8C8CA] pointer-events-auto xs:w-[240px] 1xs:block md:w-[240px]"
          type="search"
          id="MagnifyingGlass"
          placeholder="O que você procura?"
          value={term}
          onInput={(e) => setTerm((e.target as HTMLInputElement).value)}
        />
      </div>
      {term && (
        <div className="absolute top-12 w-80 z-20 ml-[75.8%] mt-5 h-[260px] bg-white text-black p-4 rounded shadow-md overflow-y-auto xs:ml-[95px] xs:w-[240px] 1xs:ml-[95px] 1xs:w-[265px] md:ml-[64.6%] md:w-[240px] lg:ml-[63.5%] lg:w-[320px] xl:ml-[72.7%]">
          {loading ? (
            <div className='flex justify-center items-center h-full'>
              <img src='loading.gif' alt='Carregando...' className='w-5' />
            </div>
          ) : (
            <>
              <h3 className='font-bold'>Categorias</h3>
              <ul>
                {results.categories.length > 0 ? results.categories.map(category => (
                  <li key={category.id}><a class='pointer hover:bg-[#E9F408]' href={handleCategoryClick(category.name)} onClick={() => handleCategoryClick(category.name)}>{category.name}</a></li>
                )) : <li>Nenhuma categoria encontrada</li>}
              </ul>
              <h3 className='font-bold'>Produtos</h3>
              <ul>
                {results.products.length > 0 ? results.products.map(product => (
                  <li key={product.id}><a class='pointer hover:bg-[#E9F408]' href={handleProductClick(product.name)} onClick={() => handleProductClick(product.id)}>{product.name}</a></li>
                )) : <li>Nenhum produto encontrado</li>}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SearchResult;
