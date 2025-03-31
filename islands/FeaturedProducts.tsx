import { useState, useEffect, useContext } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import LandingPageFooter from "deco-sites/harpon-lp/components/landingpage/Footer.tsx";
import axios from 'https://cdn.skypack.dev/axios@1.5.0';
import ProductContext from '../context/ProductContext.tsx'
import SimpleText from "deco-sites/harpon-lp/components/news/SimpleText.tsx";
import Diferencials from "deco-sites/harpon-lp/components/news/Diferencials.tsx";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
/** sass*/
interface Category {
    id: number,
    name: string,
}

interface Product {
    id: string,
    name: string,
    categoryId: string,
}


export const FeaturedProducts: FunctionalComponent = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true)
    const order = [1, 2, 12, 3, 4, 6, 5, 7, 9]

     useEffect(() => {
        axios.get('https://backend-harpon-260311756054.southamerica-east1.run.app/harpon-products/categories')
        .then((response:any) => {
           setCategories(response.data) 
        }).catch((error:any) =>{
            console.log(error)
        })
        .finally(() => {
            setLoading(false); // Define como false após a conclusão da requisição
        });
    },[])

    const replaceSpecialChars = (str: string) => {
        return str
            .normalize("NFD") // Normaliza o texto
            .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
            .replace(/[^a-zA-Z0-9 ]/g, '') // Remove caracteres não alfanuméricos e não espaços
            .toLowerCase(); // Converte para minúsculas
    };
    
    const handleCategoryClick = (categoryName: string) => {
        const normalizedCategoryName = replaceSpecialChars(categoryName);
        let newSelectedCategories = [categoryName]
        localStorage.setItem('selectedCategories', newSelectedCategories[0])
    
        const formattedCategoryName = normalizedCategoryName
            .replace(/\s+/g, '-') // Substitui espaços por hífens
            .replace(/--+/g, '-'); // Substitui múltiplos hífens por um único hífen
    
        // Retorna a URL formatada
        return `${formattedCategoryName}`;
    };
    
    
    //Funciona
    
    
    

    const compareCategories = (a, b) => {
        return order.indexOf(a.id) - order.indexOf(b.id)
    }

    
    return (
        <>
            
         <div class='container p-4 mb-[150px] xs:mt-0 xs:ml-5 xs:mb-[150px] 1xs:mt-0 1xs:-ml-[15px] md:h-[550px] lg:mt-5'>
            <h1 class='text-[36px] ml-[20px] font-normal xs:text-[20px] xs:whitespace-nowrap xs:ml-0 sm:ml-0 sm:text-3xl 1xs:text-2xl md:ml-0'>
                <span style={{ fontWeight: 'bold' }}>ETAPAS DA RECAUCHUTAGEM</span>
            </h1>
            {/* Exibe o GIF de carregamento enquanto as categorias estão sendo carregadas */}
            {loading ? (
                <div class='flex justify-center items-center h-full'>
                    <img src='loading.gif' alt='Carregando...' class='w-5' />
                </div>
            ) : (
                <div>
                    <div class='flex items-center group'>
                        {/* Seu código para o botão "VER TODOS" */}
                    </div>
                    <div class="grid grid-cols-3 ml-[20px] -mb-[150px] lg:gap-2 lg:mt-4 md:ml-0  md:grid-cols-3 gap-5 mt-4 xs:grid-cols-2 xs:ml-0 xs:gap-[40px] 1xs:grid-cols-2 1xs:gap-5 sm:grid-cols-3 xl:grid 2xl:grid">
                        {/* Renderiza as categorias */}
                        
                        {categories
                        .filter(category => ![8, 10, 11].includes(category.id))
                        .sort(compareCategories)
                        .map(category => (
                            <a href={`/recauchutagem/${handleCategoryClick(category.name)}`} onClick={() => handleCategoryClick(category.name)}>
                                <div key={category.id} class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out hover:bg-[#E9F408] xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] sm:h-20 md:w-auto md:h-[180px]">
                                    <p class='flex flex-col-2 justify-center my-[30px] font-bold text-lg uppercase text-center font-[Albert Sans] group xs:mt-[50px] xs:ml-0 xs:pt-[10px] xs:text-sm  1xs:text-lg 1xs:ml-0 1xs:mt-[50px] 1xs:pt-[30px] sm:text-sm md:pl-0 md:pt-[50px]'>{category.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div>
                <a href="/promocao-carbide" target='_blank'><img class='w-full' src='banner-atual.avif' alt='Banner Cabide' ></img></a>
            </div>
            <SimpleText />
            <Diferencials />
        <div class='xs:-mt-8 1xs:-mt-8 md:-mt-8 lg:-mt-8 xl:-mt-8 2xl:-mt-8'>
            <LandingPageFooter />
        </div>
        </>
    )
}

export default FeaturedProducts;