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

export type PaginationResult<T> = {
    first: number,
    prev: number | null,
    next: number | null,
    last: number,
    pages: number,
    items: number,
    data: T[],
};

const BASE_URL = "http://localhost:3001";

export function getAllProducts(paginationParams: {
    currentPage: number,
    pageSize: number,
}) {
    const data = { _page: paginationParams.currentPage.toString(), _per_page: paginationParams.pageSize.toString() };
    const urlSearchParams = new URLSearchParams(data);
    const queryString = urlSearchParams.toString(); // Output: _page=1&_per_page=10 

    return fetch(`${BASE_URL}/products?${queryString}`)
        .then(res => res.json() as Promise<PaginationResult<Product>>);
}

export function getSingleProduct(id: Product["id"]): Promise<Product | null> {
    return fetch(`${BASE_URL}/products/${id}`)
        .then(res => res.ok ? res.json() as Promise<Product> : null);
}

