import {useState, useEffect, useContext } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from 'https://cdn.skypack.dev/axios';
import ProductContext from '../context/ProductContext.tsx'

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

const ProductList : FunctionalComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
/*     const {selectedCategories, setSelectedCategories} = useContext(ProductContext) */
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

     useEffect(() => {
        axios.get('https://interface-web-backend-hjk3p7rq3q-rj.a.run.app/harpon-products/categories')
        .then((response:any) => {
           setCategories(response.data) 
        }).catch((error:any) =>{
            console.log(error)
        })
    },[]) 

    const handleCategoryChange = (categoryId: string, categoryName: string, isChecked: boolean) => {
        if (isChecked) {
            // Adicionar a categoria ao array selectedCategories
            setSelectedCategories(prevCategories => [...prevCategories, categoryName]);
        } else {
            // Verificar se há mais de uma categoria selecionada
            if (selectedCategories.length === 1) {
                // Se houver apenas uma categoria selecionada, não permita que o usuário a remova
                return;
            }
            // Remover a categoria do array selectedCategories
            setSelectedCategories(prevCategories => prevCategories.filter(cat => cat !== categoryName));
        }
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
            setProducts([])
        }
        // Verifica se há categorias selecionadas
        if (selectedCategories.length > 0) {
            axios.post('https://interface-web-backend-hjk3p7rq3q-rj.a.run.app/harpon-products/get-products-by-categories', {
                    categories: selectedCategories
                })
                .then((response: any) => {
                    console.log(response.data);
                    // Concatenando todos os arrays de produtos em um único array
                    const allProducts = response.data.reduce((acc: any[], curr: any[]) => acc.concat(curr), []);
                    
                    if (allProducts.length > 0) {
                        setProducts(allProducts);
                    }
                }).catch((error: any) => {
                    console.log(error);
                });
        }
    }, [selectedCategories]);
    
    

    useEffect(() => {
     console.log('products:', products)
    }, [products]);
    

    /* useEffect(() => {
        console.log(selectedCategories)
    }, [selectedCategories]) */
/* 
    const loadSelectedCategoriesFromLocalStorageOnClick = () => {
        console.log('entrou na função');
        // Obtenha a string de selectedCategories do localStorage
        const storedSelectedCategories = localStorage.getItem('selectedCategories');
        console.log(storedSelectedCategories);

        // Verifique se há algo armazenado
        if (storedSelectedCategories) {
            // Converta a string em um array
            const selectedCategoriesArray = JSON.parse(storedSelectedCategories);
            console.log(selectedCategoriesArray);

            // Atualize o estado de selectedCategories com o novo array
            setSelectedCategories(selectedCategoriesArray);
        }
    }; */
      
    return (
        <>
            <div class='inline-flex items-center ml-[200px] xs:mt-20 xs:ml-[10px] 1xs:mt-20 1xs:ml-[10px] md:mt-20 md:ml-[50px] lg:mt-20 lg:ml-[50px] xl:mt-20 xl:ml-[139px]'>
        <a href='/'><p class='font-bold'>Home &#62;</p></a>
        <p class='text-[#29323A] '>{/* &#62;  */}Todos os produtos</p>
      </div>
      <div class='xs:overflow-x-hidden 1xs:overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden'>
        <h1 class='text-[36px] font-normal ml-[139px] mt-[100px] xs:text-2xl xs:ml-[10px] xs:mt-[30px] 1xs:ml-[10px] 1xs:mt-[30px] 1xs:text-3xl md:ml-[50px] md:mt-[50px] lg:ml-[50px]'>TODOS OS {' '} 
           <span style={{ fontWeight: 'bold' }}>PRODUTOS</span>
        </h1>
        <div class='inline-flex'>
          <h2 class='text-[24px] font-bold ml-[139px] mt-[100px] xs:ml-[10px] xs:mt-5 xs:text-xl 1xs:ml-[10px] 1xs:mt-5 1xs:text-xl md:ml-[50px] lg:ml-[50px]'>
            CATEGORIAS
          </h2>
          <div class="inline-flex items-center ml-[130px] mt-[100px] xs:mt-5 xs:ml-[-120px] 1xs:mt-5 1xs:ml-[-120px] md:ml-10 lg:ml-20">
          <svg class='mr-[-30px] z-10 xs:mt-[50px] 1xs:mt-[50px]' xmlns="http://www.w3.org/2000/svg" width="16.419" height="16.423" viewBox="0 0 16.419 16.423">
            <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.726,19.727,16.16,15.118a6.508,6.508,0,1,0-.988,1L19.709,20.7a.7.7,0,0,0,.992.026A.707.707,0,0,0,20.726,19.727Zm-9.68-3.553a5.139,5.139,0,1,1,3.634-1.505A5.107,5.107,0,0,1,11.046,16.174Z" transform="translate(-4.5 -4.493)" fill="#29323A"/>
           </svg>
             <input class="w-[444px] h-10 pl-[50px] text-left bg-[#F2F2F2] text-[#29323A] text-sm xs:block xs:text-base xs:w-[350px] xs:mt-[50px] 1xs:block 1xs:text-lg 1xs:w-[400px] 1xs:mt-[50px] md:w-[320px]" type="search" id="MagnifyingGlass" placeholder="Faça uma busca" />
            <p class='font-bold text-[#29323A] ml-[120px] xs:text-xs xs:ml-[-180px] xs:mt-[-60px] xs:w-min 1xs:mt-[-60px] 1xs:w-min 1xs:text-sm 1xs:ml-[-220px] md:ml-[15px] lg:ml-[10px]'>Ordenar por:</p>
            <select class='border border-solid bg-[#F2F2F2] w-[157px] h-10 ml-[5px] p-[2px] text-sm xs:text-xs xs:w-[125px] xs:h-[30px] xs:mt-[-60px] 1xs:text-sm 1xs:w-[145px] 1xs:h-[30px] 1xs:mt-[-60px] md:ml-0 md:w-[145px]'>
                <option class='text-sm text-[#29323A]'>Mais Relevantes</option>
                <option class='text-sm text-[#29323A]'>Maiores Preços</option>
                <option class='text-sm text-[#29323A]'>Menores Preços</option>
                <option class='text-sm text-[#29323A]'>Mais Vendidos</option>
            </select>
            </div>
            </div>
            <div>
                <p class='text-normal font-bold mt-[-350px] ml-[139px] xs:mt-5 xs:ml-[10px] 1xs:mt-5 1xs:ml-[10px] md:mt-[50px] md:ml-[50px] lg:mt-[50px] lg:ml-[50px] xl:mt-[30px]'>Recauchutagem</p>
            </div>
            <div class='xs:mt-0 xs:grid xs:grid-cols-2 mt-[400px] 1xs:mt-0 1xs:grid 1xs:grid-cols-2 md:mt-5 lg:mt-5 xl:mt-[10px]'>
            {categories.map(category => (
                <div key={category.id} class="xs:text-xs 1xs:text-sm uppercase">
                    <input
                    class='ml-[139px] mt-2 xs:w-3 xs:ml-[15px] 1xs:w-3 1xs:ml-[15px] md:ml-[50px] lg:ml-[50px]'
                    type='checkbox'
                    value={category.id}
                    checked={selectedCategories.includes(category.name)}
                    onChange={(e) => handleCategoryChange(category.id, category.name, e.target.checked)}
            disabled={selectedCategories.length === 1 && selectedCategories.includes(category.name)}
                />
                    {category.name}
                </div>
            ))}
            </div>
            <hr class='ml-[139px] mt-[30px] w-[260px] text-[#C8C8CA] border xs:ml-0 xs:w-[380px] 1xs:ml-0 1xs:w-[410px] md:ml-[50px] lg:ml-[50px] md:w-[180px]'></hr>  
        </div>
            
        <div class="w-fit grid grid-cols-3 gap-[1.5rem] mt-[-400px] ml-[410px] mb-[100px] xs:mt-[50px] xs:ml-3 xs:grid-cols-2 1xs:mb-0 1xs:mt-[50px] 1xs:ml-3 1xs:grid-cols-2 md:grid-cols-2     md:ml-[280px] lg:ml-[280px] ">
                   {products.map(prod => (
                     <div key={prod.id} class="w-[260px] h-[299px] xs:w-[160px] xs:h-[150px] xs:mt-0 xs:ml-0 1xs:w-[180px] 1xs:h-[160px] 1xs:mt-0 1xs:ml-0 md:h-[250px] lg:w-[220px] group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                     >
                         <div class='group-hover:hidden'>
                             <img class='mt-5 ml-5 xs:w-[70px] xs:mt-[5px] xs:ml-[5px] 1xs:w-20 1xs:mt-[5px] 1xs:ml-[5px] md:w-[100px] lg:w-[120px]' src='tag.svg'></img>
                         </div>
                         <div class="flex items-center justify-center mb-2 mt-[15px] group xs:mt-[15px] 1xs:mt-2">
                             <img class='xs:w-28 1xs:w-[135px] lg:w-[200px]' src={prod.image}></img>
                         </div>
                         
                         <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group xs:mt-0 xs:ml-10 xs:text-base 1xs:mt-[-5px] 1xs:ml-10 1xs:text-lg md:text-2xl lg:text-3xl lg:ml-[50px]'>{prod.name}</p>
                         
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
                   ))}
            </div>
        </>
    )
}

export default ProductList;