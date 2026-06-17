import type { Product } from "@/api";
import './ProductPage.css'
import { formatCurrencyNumber, } from "@/utilities/numberFormat";
import { useMemo } from "react";


export default function ProductPage({ product }: { product: Product }) {

    const starCount = useMemo(() => {
        let rating = product.rating.rate;
        const hasHalfStar = rating % 1 !== 0;

        if (hasHalfStar) {
            rating = rating - 0.5;
        }

        return {
            full: rating,
            hasHalfStar
        }
    }, [product.rating.rate])

    return (<div className="product-container">
        {/* <p>{formatCurrencyNumber(product.price)}</p>
        <p>⭐: {product.rating.rate}, Count: {(product.rating.count)}</p>
        <p>{product.category}</p> */}

        <div className="image-section">
            <img className="product-image" src={product.image} alt={`Image of a ${product.title}`} />
        </div>
        <div className="product-details">
            <h1>{product.title}</h1>
            {starCount.full > 0 && [...Array(starCount.full)].map((_, i) => <IMdiStar key={i} />)}
            {starCount.hasHalfStar && <IMdiStarHalf />}
        </div>
    </div>)
}