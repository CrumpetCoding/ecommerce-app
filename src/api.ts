export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
};

export function getAllProducts(): Promise<Product[]> {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json() as Promise<Product[]>);
}

export function getSingleProduct(id: Product["id"]): Promise<Product> {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json() as Promise<Product>);
}
