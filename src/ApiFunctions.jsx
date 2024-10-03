import AxiosProvider from "./AxiosProvider";

// Get all products
export const getAllProducts = (language) => {
    return AxiosProvider.get('/shop/products?per_page=200', {
        headers: {
            'Accept-Language': language,
        }
    });
};

// Get all categories
export const getCategories = (language) => {
    return AxiosProvider.get("/tags/categories", {
        headers: {
            'Accept-Language': language,
        }
    });
};

// Get products by selected category
export const getProducts = (id, language) => {
    return AxiosProvider.get("/shop/products", {
        params: {
            categorysId: id,
            per_page: 100
        },
        headers: {
            'Accept-Language': language,
        }
    });
};

// Get selected product
export const single_product = (id, language) => {
    return AxiosProvider.get(`/shop/products/${id}`, {
        headers: {
            'Accept-Language': language,
        }
    });
};