import type { Product } from "@/api";
import './ProductPage.css'
import { formatCurrencyNumber, } from "@/utilities/numberFormat";


export default function ProductPage({ product }: { product: Product }) {

    return (<div className="product-container">
        {/* <p>{formatCurrencyNumber(product.price)}</p>
        <p>⭐: {product.rating.rate}, Count: {(product.rating.count)}</p>
        <p>{product.category}</p> */}

        <div className="image-section">
            <img className="product-image" src={product.image} alt={`Image of a ${product.title}`} />
        </div>
        <div className="product-details">
            <h1>{product.title}</h1>
            <IMdiStar />
            <IMdiStarHalf />
        </div>
    </div>)
}