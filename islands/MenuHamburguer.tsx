import { useState, useEffect } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import axios from 'https://cdn.skypack.dev/axios';

interface Category {
    id: string;
    name: string;
}

export const MenuHamburguer: FunctionalComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        console.log("Teste")
        axios.get('https://interface-web-backend-hjk3p7rq3q-rj.a.run.app/harpon-products/categories')
        .then((response:any) => {
           setCategories(response.data) 
        }).catch((error:any) =>{
            console.log(error)
        });
    },[]);

    const handleCategoryClick = (categoryName: string) => {
        let newSelectedCategories = [categoryName];
        localStorage.setItem('selectedCategories', newSelectedCategories[0]);
    };

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="relative">
                <div
                    id="menu-toggle"
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenu}
                    className="relative flex group ml-[130px] md:ml-0 lg:ml-20"
                >
                    <svg
                        className="group-hover:fill-[#E9F408]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="#FFFFFF"
                    > 
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M21 18c1.1 0 2 .9 2 2s-.9 2-2 2H3c-1.1 0-2-.9-2-2s.9-2 2-2zM21 6H3C1.9 6 1 6.9 1 8s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2zm0 6H3c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2z"/>
                    </svg>
                    <p class="text-white font-bold text-[18px] group-hover:text-[#E9F408] ml-[10px]">Produtos</p>
                    <div
                        onMouseEnter={openMenu}
                        onMouseLeave={closeMenu}
                        style={{ position: "absolute", top: "100%", left: "0", width: "100%", height: "30px" }}
                    ></div>
                        {isMenuOpen && (
                            <ul
                                className="absolute mt-2 ml-0 z-10"
                                style={{
                                    top: "calc(100% + 10px)",
                                    left: "0",
                                    width: "168px",
                                    height: "450px",
                                    background: "#FFFFFF",
                                    backgroundRepeat: "no-repeat",
                                    boxShadow: "0px 12px 19px #0000001A",
                                    opacity: 1,
                                }}
                                onMouseEnter={openMenu}
                                onMouseLeave={closeMenu}
                            >
                                <li
                                    onMouseOver={() => handleCategoryClick('Categorias')}
                                    onMouseOut={() => handleCategoryClick('Categorias')}
                                >
                                    <a
                                        href="#"
                                        className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        Categorias
                                    </a>
                                </li>
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <a
                                            href="#"
                                            className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            onMouseOver={() => handleCategoryClick(category.name)}
                                            onMouseOut={() => handleCategoryClick(category.name)}
                                        >
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                </div>
            </div>
        </>
    );
};

export default MenuHamburguer;
