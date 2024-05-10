import { useState, useEffect, useContext } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
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

     useEffect(() => {
        console.log("Teste")
        axios.get('https://interface-web-backend-hjk3p7rq3q-rj.a.run.app/harpon-products/categories')
        .then((response:any) => {
           setCategories(response.data) 
        }).catch((error:any) =>{
            console.log(error)
        })
    },[])

    const handleCategoryClick = (categoryName: string) => {
        let newSelectedCategories = [categoryName]
        localStorage.setItem('selectedCategories', newSelectedCategories[0])
    }
 
    return (
        <div class='container mx-auto p-4 mt-[150px] xs:mt-0 xs:mb-0 1xs:mt-0 1xs:h-[600px] md:h-[550px]'>
           <h1 class='text-[36px] font-normal xs:text-[20px] 1xs:text-2xl'> 
           <span style={{ fontWeight: 'bold' }}>CATEGORIAS</span>
           </h1> 
            <div class='flex items-center group justify-end'>
                <a href='/productlist'>
                    <p
                        style={{border: "solid 1px black", padding: "6px"}}
                        class="w-[130px] mt-[-40px] ml-[1050px] h-[36px] text-center font-semibold group-hover:bg-[#E9F408] md:ml-[610px] lg:ml-[850px]"
                    >
                         VER TODOS
                    </p>
                </a>    
                <svg class='ml-[-16px] mt-[-40px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                    <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                        <path id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#29323a"/>
                        <path id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#29323a"/>
                    </g>
                </svg>
            </div>
           <div class="flex flex-wrap justify-start lg:gap-2 lg:mt-4 md:grid-cols-4 gap-2 mt-4 xs:grid-cols-2 xs:gap-5 1xs:grid-cols-2 1xs:gap-5 xl:flex 2xl:flex">
           {categories.map(category => (
                    <a href='/productlist' onClick={() => handleCategoryClick(category.name)}>
                        <div key={category.id} class="group section border border-solid border-[#E6E6E6] w-[200px] h-[100px] relative transition duration-300 ease-in-out hover:bg-[#E9F408] xs:w-[150px] xs:h-[150px] 1xs:w-[180px] 1xs:h-[200px] md:w-[180px] md:h-[250px]">
                        <p class='flex justify-center my-[30px] font-bold text-[20px] uppercase text-center font-[Albert Sans] group xs:mt-[35px] xs:ml-[45px] xs:pt-[10px] xs:text-xs 1xs:text-base 1xs:ml-[50px] 1xs:pt-[30px] md:pl-5 md:pt-[90px]'>{category.name}</p>
                        </div>
                    </a>
                ))}
                
           </div>
           </div>
    )
}

export default FeaturedProducts;