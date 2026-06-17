import type { Product } from "@/api";
import './ProductPage.css'
import { formatCurrencyNumber, } from "@/utilities/numberFormat";
import { useMemo } from "react";


export default function ProductPage({ product }: { product: Product }) {

    const starCount = useMemo(() => {
        const rating = product.rating.rate;
        let fullRating = rating;
        const hasHalfStar = fullRating % 1 !== 0;

        if (hasHalfStar) {
            fullRating = fullRating - 0.5;
        }

        return {
            full: fullRating,
            hasHalfStar,
            empty: Math.floor(5 - rating)
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
            <div className="ratings-row">
                {starCount.full > 0 && [...Array(starCount.full)].map((_, i) => <IMdiStar key={i} />)}
                {starCount.hasHalfStar && <IMdiStarHalfFull />}
                {starCount.empty > 0 && [...Array(starCount.empty)].map((_, i) => <IMdiStarOutline key={i} />)}
                <span className="rating-count">({product.rating.count})</span>
            </div>
        </div>
    </div>)
}