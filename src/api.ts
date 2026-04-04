export type Product = {
    id: string,
    title: string,
    price: number,
    ageRange: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
};

const BASE_URL = "http://localhost:3001";

export function getAllProducts(): Promise<Product[]> {
    return fetch(`${BASE_URL}/products`)
        .then(res => res.json() as Promise<Product[]>);
}

export function getSingleProduct(id: Product["id"]): Promise<Product | null> {
    return fetch(`${BASE_URL}/products/${id}`)
        .then(res => res.ok ? res.json() as Promise<Product> : null);
}
