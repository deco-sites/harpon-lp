import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "https://cdn.skypack.dev/axios@1.5.0";

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  code: string;
  image: string;
  categoryId: string;
}

export const MenuHamburguer: FunctionalComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [subMenuCategories, setSubMenuCategories] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});
  const [isMouseOverSubmenu, setIsMouseOverSubmenu] = useState<{ [key: string]: boolean }>({});
  const [additionalSubmenuOpen, setAdditionalSubmenuOpen] = useState(false);
  const [additionalSecondSubMenuOpen, setAdditionalSecondSubMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("https://backend-harpon-260311756054.southamerica-east1.run.app/harpon-products/categories")
      .then((response: any) => {
        setCategories(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      axios.post(
        "https://backend-harpon-260311756054.southamerica-east1.run.app/harpon-products/get-products-by-categories",
        {
          categories: selectedCategories,
        }
      )
      .then((response: any) => {
        const allProducts = response.data.reduce((acc: any[], curr: any[]) => acc.concat(curr), []);
        setProducts(allProducts);
      })
      .catch((error: any) => {
        console.log(error);
      });
    }
  }, [selectedCategories]);

  const handleSubmenuMouseEnter = (categoryName: string) => {
    setSelectedCategories([categoryName]);
  };

  const handleCategoryClick = (categoryName: string) => {
    localStorage.setItem("selectedCategories", categoryName);
    setSelectedCategories([categoryName]);
  };

  const handleProductClick = (productId: string) => {
    localStorage.setItem("selectedProduct", productId);
  };

  const toggleSubmenu = (categoryId: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };

  const toggleAdditionalSubmenu = () => {
    setAdditionalSubmenuOpen(!additionalSubmenuOpen);
  };

  const toggleAdditionalSecondSubmenu = () => {
    setAdditionalSecondSubMenuOpen(!additionalSecondSubMenuOpen);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const subMenuOpen = () => {
    setSubMenuCategories(true);
  };

  const closeSubMenuOpen = () => {
    setSubMenuCategories(false);
  };

  return (
    <>
      <div className="relative">
        <div
          id="menu-toggle"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className="relative flex group ml-[130px] sm:ml-0 md:ml-0 lg:ml-20"
        >
          <svg
            className="group-hover:fill-[#E9F408]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 18c1.1 0 2 .9 2 2s-.9 2-2 2H3c-1.1 0-2-.9-2-2s.9-2 2-2zM21 6H3C1.9 6 1 6.9 1 8s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2zm0 6H3c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2z" />
          </svg>
          <p class="text-white font-bold text-[18px] group-hover:text-[#E9F408] ml-[10px]">
            Produtos
          </p>
          <div
            class='-mt-[15px]'
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            style={{
              position: "absolute",
              top: "80%",
              left: "0",
              width: "100%",
              height: "40px",
            }}
          ></div>
          {isMenuOpen && (
            <ul
              className="absolute mt-2 ml-0 z-10"
              style={{
                top: "calc(100% + 10px)",
                left: "0",
                width: "168px",
                height: "500px",
                background: "#FFFFFF",
                backgroundRepeat: "no-repeat",
                boxShadow: "0px 12px 19px #0000001A",
                opacity: 1,
              }}
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <li onMouseEnter={subMenuOpen} onMouseLeave={closeSubMenuOpen}>
                <a
                  href="#"
                  className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Categorias
                </a>
                {subMenuCategories && (
                  <ul
                    className="absolute top-0 left-full mt-0"
                    style={{
                      width: "209px",
                      height: "500px",
                      background: "#FFFFFF",
                      backgroundRepeat: "no-repeat",
                      boxShadow: "0px 12px 19px #0000001A",
                      opacity: 1,
                    }}
                  >
                    {categories.map((category) => (
                      <li
                        key={category.name}
                        onMouseEnter={(e) => {
                          toggleSubmenu(category.id)
                          handleSubmenuMouseEnter(category.name)
                          toggleAdditionalSubmenu(category.id)
                          toggleAdditionalSecondSubmenu(category.id)
                        }}
                        onMouseLeave={(e) => {
                          toggleSubmenu(category.id)
                          handleSubmenuMouseEnter(category.name)
                          toggleAdditionalSubmenu(category.id)
                          toggleAdditionalSecondSubmenu(category.id)
                        }}
                      >
                        <a
                          href="/produtos"
                          onClick={() => handleCategoryClick(category.name)}
                          className="block pt-2 pl-3 pr-4 text-[16px] text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {category.name}
                        </a>
                        {openSubmenus[category.id] && (
                          <ul
                            className="absolute top-0 left-full mt-0"
                            style={{
                              width: "209px",
                              height: "500px",
                              background: "#FFFFFF",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 12px 19px #0000001A",
                              opacity: 1,
                            }}
                          >
                            {products
                              .filter((prod) => prod.categoryId === category.id)
                              .slice(0, 12)
                              .map((prod) => (
                                <li key={prod.id}>
                                  <a
                                    href="/moredetails"
                                    onClick={() => handleProductClick(prod.id)}
                                    className="block pt-2 pl-3 pr-4 text-sm  text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                  >
                                    {prod.name}
                                  </a>
                                </li>
                              ))}
                            {additionalSubmenuOpen &&
                              products.filter((prod) => prod.categoryId === category.id)
                                .length > 12 && (
                                <ul
                                  className="absolute top-0 left-full mt-0"
                                  style={{
                                    width: "209px",
                                    height: "500px",
                                    background: "#FFFFFF",
                                    backgroundRepeat: "no-repeat",
                                    boxShadow: "0px 12px 19px #0000001A",
                                    opacity: 1,
                                  }}
                                >
                                  {products
                                    .filter((prod) => prod.categoryId === category.id)
                                    .slice(12, 27)
                                    .map((prod) => (
                                      <li key={prod.id}>
                                        <a
                                          href="/moredetails"
                                          onClick={() => handleProductClick(prod.id)}
                                          className="block pt-2 pl-3 pr-4 text-sm  text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                          {prod.name}
                                        </a>
                                      </li>
                                    ))}
                                  {additionalSecondSubMenuOpen &&
                                    products.filter((prod) => prod.categoryId === category.id)
                                      .length > 27 && (
                                      <ul
                                        className="absolute top-0 left-full mt-0"
                                        style={{
                                          width: "209px",
                                          height: "500px",
                                          background: "#FFFFFF",
                                          backgroundRepeat: "no-repeat",
                                          boxShadow: "0px 12px 19px #0000001A",
                                          opacity: 1,
                                        }}
                                      >
                                        {products
                                          .filter((prod) => prod.categoryId === category.id)
                                          .slice(27)
                                          .map((prod) => (
                                            <li key={prod.id}>
                                              <a
                                                href="/moredetails"
                                                onClick={() => handleProductClick(prod.id)}
                                                className="block pt-2 pl-3 pr-4 text-sm  text-[#29323A] rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                              >
                                                {prod.name}
                                              </a>
                                            </li>
                                          ))}
                                      </ul>
                                    )}
                                </ul>
                              )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuHamburguer;
