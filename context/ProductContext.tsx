import { createContext, h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

/* interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    name: string;
    categoryId: string;
} */

interface ProductContextType {
    selectedCategories: any[];
    setSelectedCategories: (categoryName: any[]) => void;
}

 const ProductContext = createContext<ProductContextType>({
    selectedCategories: [],
    setSelectedCategories: () => {},
});

export default ProductContext;

export const ProductProvider: FunctionalComponent<any> = ({ children }) => {
    const [selectedCategories, setSelectedCategories] = useState<any[]>([]);


    return (
        <ProductContext.Provider value={{ selectedCategories, setSelectedCategories }}>
            {children}
        </ProductContext.Provider>
    );
};


