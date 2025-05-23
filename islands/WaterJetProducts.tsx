import {useState, useEffect, useContext } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from 'https://cdn.skypack.dev/axios@1.5.0';
import ProductContext from '../context/ProductContext.tsx'
import WaterJetProductSearch from "deco-sites/harpon-lp/islands/WaterJetProductSearch.tsx";

interface Product {
    id: string;
    name: string
    description: string;
    price: number;
    code: string;
    image: string;
}

interface Category {
    id: string,
    name: string,
}

const WaterJetProductList : FunctionalComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
/*     const {selectedCategories, setSelectedCategories} = useContext(ProductContext) */
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

     useEffect(() => {
        axios.get('https://backend-harpon-260311756054.southamerica-east1.run.app/waterjet-products/categories')
        .then((response:any) => {
           setCategories(response.data) 
        }).catch((error:any) =>{
            console.log(error)
        })
    },[]) 

    const handleCategoryChange = (categoryId: string, categoryName: string, isChecked: boolean) => {
        setSelectedCategories(prevCategories => {
            let updatedCategories;
            if (isChecked) {
                // Remover a categoria se já estiver presente e adicionar no início do array
                updatedCategories = prevCategories.filter(cat => cat !== categoryName);
                updatedCategories = [categoryName, ...updatedCategories];
            } else {
                // Remover a categoria do array
                updatedCategories = prevCategories.filter(cat => cat !== categoryName);
            }
            return updatedCategories;
        });
    };
    
    

    useEffect(() => {
        // Obtém a string armazenada no localStorage
        const selectedCategoryString = localStorage.getItem('selectedCategories');
        // Verifica se a string existe e não está vazia
        if (selectedCategoryString) {
            // Adiciona a string ao array existente e define como novo estado de selectedCategories
            setSelectedCategories(prevCategories => {
                const newCategories = [...prevCategories, selectedCategoryString];
                return newCategories;
            });
        }
    }, [])
    
    
    useEffect(() => {
        

        if (selectedCategories.length === 0) {
            setProducts([]);
            return; // Certifica-se de que a função não continue se não houver categorias selecionadas
        }

        setLoading(true); // Define como true no início da requisição

        axios.post('https://backend-harpon-260311756054.southamerica-east1.run.app/waterjet-products/get-waterjet-products-by-categories', {
            categories: selectedCategories
        })
        .then((response: any) => {
            

            // Colocar os produtos da última categoria selecionada no início
            const allProducts = selectedCategories.reduce((acc, category, index) => {
                const productsForCategory = response.data[index] || [];
                if (index === 0) {
                    return [...productsForCategory, ...acc];
                } else {
                    return [...acc, ...productsForCategory];
                }
            }, []);

            setProducts(allProducts);
        })
        .catch((error: any) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false); // Define como false após a conclusão da requisição
        });

    }, [selectedCategories]);

    
    const handleProductClick = (productName: string) => {
        let newSelectedProduct = [productName];
        localStorage.setItem('selectedProduct', newSelectedProduct);
    
        // Converte o nome em letras minúsculas e separa pelos hífens
        const formattedProductName = productName.toLowerCase().replace(/\s+/g, '-');
        const encodedProductName = encodeURIComponent(formattedProductName);
    
        return `waterjet/${encodedProductName}`;
    }
    
 
    return (
        <>
            
      <div class='xs:overflow-x-hidden 1xs:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden'>
        <h1 class='hidden text-[36px] font-normal ml-5 mt-[100px] xs:text-2xl xs:ml-[10px] xs:mt-[30px] 1xs:ml-[10px] 1xs:mt-[30px] 1xs:text-3xl sm:ml-5 md:ml-5 md:mt-[50px] lg:ml-5'>TODOS OS {' '} 
           <span style={{ fontWeight: 'bold' }}>PRODUTOS</span>
        </h1>
        <div class='inline-flex items-baseline -mt-20'>
        <div class='inline-flex items-center ml-[139px] xs:mt-3 xs:ml-[10px] 1xs:mt-3 1xs:ml-[10px] sm:mt-[50px] sm:ml-5 md:mt-0 md:ml-5 lg:mt-20 lg:ml-5 xl:mt-20 xl:ml-5'>
        <a href='/'><p class='font-bold'>Home &#62;</p></a>
        <p class='text-[#29323A] '>{/* &#62;  */}Todos os produtos</p>
      </div>
          <h2 class='hidden text-[24px] font-bold ml-5 mt-[100px] xs:ml-[10px] xs:mt-5 xs:text-xl 1xs:ml-[10px] 1xs:mt-5 1xs:text-xl sm:ml-5 md:ml-5 lg:ml-5'>
            CATEGORIAS
          </h2>
          <div class="inline-flex items-center ml-[260px] mt-[100px] xs:mt-5 xs:ml-[-120px] 1xs:mt-5 1xs:ml-[-120px] sm:ml-[50px] md:ml-10 lg:ml-20">
          <WaterJetProductSearch />
            <p class='hidden font-bold text-[#29323A] ml-[120px] xs:text-xs xs:ml-[-180px] xs:mt-[-60px] xs:w-min 1xs:mt-[-60px] 1xs:w-min 1xs:text-sm 1xs:ml-[-220px] sm:whitespace-nowrap sm:ml-5 md:ml-[15px] lg:ml-[10px]'>Ordenar por:</p>
            <select class='hidden border border-solid bg-[#F2F2F2] w-[157px] h-10 ml-[5px] p-[2px] text-sm xs:text-xs xs:w-[125px] xs:h-[30px] xs:mt-[-60px] 1xs:text-sm 1xs:w-[145px] 1xs:h-[30px] 1xs:mt-[-60px] md:ml-0 md:w-[145px]'>
                <option class='text-sm text-[#29323A]'>Mais Relevantes</option>
                <option class='text-sm text-[#29323A]'>Maiores Preços</option>
                <option class='text-sm text-[#29323A]'>Menores Preços</option>
                <option class='text-sm text-[#29323A]'>Mais Vendidos</option>
            </select>
            </div>
            </div>
            <div>
                <p class='text-normal font-bold ml-5 xs:mt-5 xs:ml-[10px] 1xs:mt-5 1xs:ml-[10px] sm:ml-5 md:mt-[50px] md:ml-5 lg:mt-[50px] lg:ml-5 xl:mt-[30px]'>WaterJet</p>
            </div>
            <div class='xs:mt-0 xs:grid xs:grid-cols-2 mt-5 1xs:mt-0 1xs:grid 1xs:grid-cols-2 md:mt-5 lg:mt-5 xl:mt-[10px]'>
            {categories.map(category => (
                <div key={category.id} class="xs:text-xs 1xs:text-sm uppercase">
                    <label className="flex items-center">
                        <input
                            className="hidden"
                            type="checkbox"
                            value={category.id}
                            checked={selectedCategories.includes(category.name)}
                            onChange={(e) => handleCategoryChange(category.id, category.name, e.target.checked)}
                            disabled={selectedCategories.length === 1 && selectedCategories.includes(category.name)}
                        />
                        <span className={`ml-5 mt-2 cursor-pointer hover:bg-[#E9F408] hover:border-black xs:w-3 xs:ml-[15px] 1xs:w-3 1xs:ml-[15px]  sm:ml-5 md:ml-5 lg:ml-5 w-5 h-5 border ${selectedCategories.includes(category.name) ? 'border-black bg-[#E9F408]' : 'border-gray-400'}`}></span>
                        <span className="ml-2 cursor-pointer">{category.name}</span>
                        </label>
                </div>
            ))}
            </div>
        </div>
            
        {loading ? (
            <div class='flex justify-center items-center h-full'>
                <img src='loading.gif' alt='Carregando...' class='w-5' />
            </div>
        ): (
            <div class="w-fit grid grid-cols-3 gap-[1.5rem] mt-[-500px] ml-[430px] mb-[100px] xs:mt-[50px] xs:ml-3 xs:grid-cols-2 1xs:mb-[50px] 1xs:mt-[50px] 1xs:ml-3 1xs:grid-cols-2 sm:grid-cols-2 sm:w-max sm:ml-[310px] md:grid-cols-2 md:ml-[295px] lg:ml-[295px] ">
                   {products.map(prod => (
                    <a href ={handleProductClick(prod.name)} onClick={() => handleProductClick(prod.id)}>
                     <div key={prod.id} class="w-[260px] h-[299px] hover:border-[#E9F408] xs:w-[160px] xs:h-[150px] xs:mt-0 xs:ml-0 1xs:w-[180px] 1xs:h-[160px] 1xs:mt-0 1xs:ml-0 sm:w-[220px] sm:h-[250px] md:h-[200px] md:w-[220px] lg:w-[220px] lg:h-[220px] group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                     >
                         <div class="flex items-center justify-center mb-2 mt-[15px] group xs:mt-[15px] 1xs:mt-2">
                             <img class='h-[160px] xs:w-[75px] xs:h-[60px] 1xs:w-[90px] 1xs:h-20 sm:h-[120px] md:h-[100px] lg:w-[150px] lg:h-[90px]' src={prod.image}></img>
                         </div>
                         
                         <p class='mt-5 font-bold text-[20px] text-center group xs:mt-0 xs:ml-0 xs:text-center xs:text-sm 1xs:mt-3 1xs:ml-0 1xs:text-sm 1xs:text-center sm:ml-0 sm:text-center md:text-lg md:text-center md:ml-0 lg:text-xl lg:text-center lg:ml-0 lg:mt-3'>{prod.name}</p>
                     </div>
                    </a>
                   ))}
            </div>
        )}
        </>
    )
}
// teste
export default WaterJetProductList;