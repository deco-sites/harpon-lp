import {useState, useEffect, useContext } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from 'https://cdn.skypack.dev/axios';

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

const Cementation : FunctionalComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
/*     const {selectedCategories, setSelectedCategories} = useContext(ProductContext) */
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const ordercategories = [1, 2, 12, 3, 4, 6, 5, 7, 9]

     useEffect(() => {
        axios.get('https://backend-harpon-hjk3p7rq3q-rj.a.run.app/harpon-products/categories')
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
    
            // Log da ordem atual das categorias
            console.log('Ordem das categorias:', updatedCategories);
    
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
        console.log("Novo estado de selectedCategories:", selectedCategories);

        if (selectedCategories.length === 0) {
            setProducts([]);
            return; // Certifica-se de que a função não continue se não houver categorias selecionadas
        }

        setLoading(true); // Define como true no início da requisição

        axios.post('https://backend-harpon-hjk3p7rq3q-rj.a.run.app/harpon-products/get-products-by-categories', {
            categories: selectedCategories
        })
        .then((response: any) => {
            console.log(response.data);

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
    
        return `/${encodedProductName}`;
    }
    // Teste

    const newCompareCategories = (a, b) => {
        return ordercategories.indexOf(a.id) - ordercategories.indexOf(b.id)
    }
    
 
    return (
        <>
            <div class='inline-flex items-center ml-[139px] xs:mt-3 xs:ml-[10px] 1xs:mt-3 1xs:ml-[10px] sm:mt-[50px] sm:ml-5 md:mt-0 md:ml-5 lg:mt-20 lg:ml-5 xl:mt-20 xl:ml-[139px]'>
        <a href='/'><p class='font-bold'>Home &#62;</p></a>
        <p class='text-[#29323A] '>{/* &#62;  */}Todos os produtos</p>
      </div>
      <div class='xs:overflow-x-hidden 1xs:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden'>
        <h1 class='text-[36px] font-normal ml-[139px] mt-[100px] xs:text-2xl xs:ml-[10px] xs:mt-[30px] 1xs:ml-[10px] 1xs:mt-[30px] 1xs:text-3xl sm:ml-5 md:ml-5 md:mt-[50px] lg:ml-5'>TODOS OS {' '} 
           <span style={{ fontWeight: 'bold' }}>PRODUTOS</span>
        </h1>
        <div class='inline-flex'>
          <h2 class='text-[24px] font-bold ml-[139px] mt-[100px] xs:ml-[10px] xs:mt-5 xs:text-xl 1xs:ml-[10px] 1xs:mt-5 1xs:text-xl sm:ml-5 md:ml-5 lg:ml-5'>
            ETAPAS
          </h2>
          <div class="inline-flex items-center ml-[210px] mt-[100px] xs:mt-5 xs:ml-[-120px] 1xs:mt-5 1xs:ml-[-120px] sm:ml-[50px] md:ml-10 lg:ml-20 2xl:ml-[280px]">
          <svg class='mr-[-30px] z-10 xs:mt-[50px] 1xs:mt-[50px] ' xmlns="http://www.w3.org/2000/svg" width="16.419" height="16.423" viewBox="0 0 16.419 16.423">
            <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.726,19.727,16.16,15.118a6.508,6.508,0,1,0-.988,1L19.709,20.7a.7.7,0,0,0,.992.026A.707.707,0,0,0,20.726,19.727Zm-9.68-3.553a5.139,5.139,0,1,1,3.634-1.505A5.107,5.107,0,0,1,11.046,16.174Z" transform="translate(-4.5 -4.493)" fill="#29323A"/>
           </svg>
             <input class="w-[444px] h-10 pl-[70px] text-left bg-[#F2F2F2] text-[#29323A] text-sm xs:block xs:text-base xs:w-[350px] xs:mt-[50px] 1xs:block 1xs:text-lg 1xs:w-[400px] 1xs:mt-[50px] sm:w-[300px] md:w-[280px]" type="search" id="MagnifyingGlass" placeholder="Faça uma busca" />
            <p class='font-bold text-[#29323A] ml-[120px] xs:text-xs xs:ml-[-180px] xs:mt-[-60px] xs:w-min 1xs:mt-[-60px] 1xs:w-min 1xs:text-sm 1xs:ml-[-220px] sm:whitespace-nowrap sm:ml-5 md:ml-[15px] lg:ml-[10px] 2xl:ml-[400px]'>Ordenar por:</p>
            <select class='border border-solid bg-[#F2F2F2] w-[157px] h-10 ml-[5px] p-[2px] text-sm xs:text-xs xs:w-[125px] xs:h-[30px] xs:mt-[-60px] 1xs:text-sm 1xs:w-[145px] 1xs:h-[30px] 1xs:mt-[-60px] md:ml-0 md:w-[145px]'>
                <option class='text-sm text-[#29323A]'>Mais Relevantes</option>
                <option class='text-sm text-[#29323A]'>Maiores Preços</option>
                <option class='text-sm text-[#29323A]'>Menores Preços</option>
                <option class='text-sm text-[#29323A]'>Mais Vendidos</option>
            </select>
            </div>
            </div>
            <div>
                <p class='text-normal font-bold ml-[139px] xs:mt-5 xs:ml-[10px] 1xs:mt-5 1xs:ml-[10px] sm:ml-5 md:mt-[50px] md:ml-5 lg:mt-[50px] lg:ml-5 xl:mt-[30px]'>Recauchutagem</p>
            </div>
            <div class='xs:mt-0 xs:grid xs:grid-cols-2 mt-5 1xs:mt-0 1xs:grid 1xs:grid-cols-2 md:mt-5 lg:mt-5 xl:mt-[10px]'>
            {categories
            .filter(category => ![8, 10, 11].includes(category.id))
            .sort(newCompareCategories)
            .map(category => (
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
                        <span className={`ml-[139px] mt-2 cursor-pointer hover:bg-[#E9F408] hover:border-black xs:w-3 xs:ml-[15px] 1xs:w-3 1xs:ml-[15px]  sm:ml-5 md:ml-5 lg:ml-5 w-5 h-5 border ${selectedCategories.includes(category.name) ? 'border-black bg-[#E9F408]' : 'border-gray-400'}`}></span>
                        <span className="ml-2 cursor-pointer">{category.name}</span>
                        </label>
                </div>
            ))}
            </div>
            <hr class='w-[260px] ml-[139px] mt-5'></hr>
            <div>
                <p class='text-normal font-bold ml-[139px] xs:mt-5 xs:ml-[10px] 1xs:mt-5 1xs:ml-[10px] sm:ml-5 md:mt-[50px] md:ml-5 lg:mt-[50px] lg:ml-5 xl:mt-[30px]'>Outras linhas </p>
            </div>
            <div class='xs:mt-0 xs:grid xs:grid-cols-2 mt-5 1xs:mt-0 1xs:grid 1xs:grid-cols-2 md:mt-5 lg:mt-5 xl:mt-[10px]'>
            {categories
            .filter(category => ![1, 2, 12, 3, 4, 6, 5, 7, 9].includes(category.id))
            .map(category => (
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
                        <span className={`ml-[139px] mt-2 cursor-pointer hover:bg-[#E9F408] hover:border-black xs:w-3 xs:ml-[15px] 1xs:w-3 1xs:ml-[15px]  sm:ml-5 md:ml-5 lg:ml-5 w-5 h-5 border ${selectedCategories.includes(category.name) ? 'border-black bg-[#E9F408]' : 'border-gray-400'}`}></span>
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
            <div class="w-fit grid grid-cols-3 gap-[1.5rem] mt-[-420px] ml-[430px] mb-[100px] xs:mt-[50px] xs:ml-3 xs:grid-cols-2 1xs:mb-[50px] 1xs:mt-[50px] 1xs:ml-3 1xs:grid-cols-2 sm:grid-cols-2 sm:w-max sm:ml-[310px] md:grid-cols-2 md:ml-[295px] lg:ml-[295px] 2xl:grid-cols-4 2xl:ml-[500px]">
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

export default Cementation;