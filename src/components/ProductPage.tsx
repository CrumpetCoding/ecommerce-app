import type { Product } from "@/api";
import { formatCurrencyNumber, } from "@/utilities/numberFormat";


export default function ProductPage({ product }: { product: Product }) {
    return (<div>
        <h1>{product.title}</h1>
        <p>{formatCurrencyNumber(product.price)}</p>
        <p>⭐: {product.rating.rate}, Count: {(product.rating.count)}</p>
        <p>{product.category}</p>
        <img src={product.image} alt={`Image of a ${product.title}`} />
    </div>)
}