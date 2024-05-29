import { useState, useEffect, useContext } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import LandingPageFooter from "deco-sites/harpon-lp/components/landingpage/Footer.tsx";
import axios from 'https://cdn.skypack.dev/axios';
import ProductContext from '../context/ProductContext.tsx'

interface Category {
    id: string,
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

     useEffect(() => {
        console.log("Teste")
        axios.get('https://interface-web-backend-hjk3p7rq3q-rj.a.run.app/harpon-products/categories')
        .then((response:any) => {
           setCategories(response.data) 
        }).catch((error:any) =>{
            console.log(error)
        })
        .finally(() => {
            setLoading(false); // Define como false após a conclusão da requisição
        });
    },[])

    const handleCategoryClick = (categoryName: string) => {
        let newSelectedCategories = [categoryName]
        localStorage.setItem('selectedCategories', newSelectedCategories[0])
    }

    
    return (
        <>
            <div>
                <a href="/promocao-carbide" target='_blank'><img class='w-full -mt-10' src='banner-atual.png' alt='Banner Cabide' ></img></a>
            </div>
         <div class='container p-4 mb-[150px] xs:mt-0 xs:mb-0 1xs:mt-0 1xs:h-[600px] md:h-[550px]'>
            <h1 class='text-[36px] ml-[20px] font-normal xs:text-[20px] 1xs:text-2xl'>
                <span style={{ fontWeight: 'bold' }}>CATEGORIAS</span>
            </h1>
            {/* Exibe o GIF de carregamento enquanto as categorias estão sendo carregadas */}
            {loading ? (
                <div class='flex justify-center items-center h-full'>
                    <img src='loading.gif' alt='Carregando...' class='w-20' />
                </div>
            ) : (
                <div>
                    <div class='flex items-center group'>
                        {/* Seu código para o botão "VER TODOS" */}
                    </div>
                    <div class="grid grid-cols-4 ml-[20px] -mb-[150px] lg:gap-2 lg:mt-4 md:grid-cols-4 gap-5 mt-4 xs:grid-cols-2 xs:gap-5 1xs:grid-cols-2 1xs:gap-5 xl:grid 2xl:grid">
                        {/* Renderiza as categorias */}
                        {categories.map(category => (
                            <a href='/productlist' onClick={() => handleCategoryClick(category.name)}>
                                <div key={category.id} class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out hover:bg-[#E9F408] xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]">
                                    <p class='flex justify-center my-[30px] font-bold text-lg uppercase text-center font-[Albert Sans] group xs:mt-[35px] xs:ml-[45px] xs:pt-[10px] xs:text-xs 1xs:text-base 1xs:ml-[50px] 1xs:pt-[30px] md:pl-5 md:pt-[90px]'>{category.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div>
            <LandingPageFooter />
        </div>
        </>
    )
}

export default FeaturedProducts;