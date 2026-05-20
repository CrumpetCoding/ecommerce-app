import { type Product } from '@/api'
import { formatCurrencyNumber } from '@/utilities/numberFormat'
import './ProductCard.css'

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="product-card">
            <div className='product-image-container'>
                <img className='product-image' src={product.image} alt={`Image of a ${product.title}`} />
            </div>
            <a href={`/products/${product.id}`}>
                <p className='product-title'>{product.title}</p>
            </a>
            <div className='product-info'>
                <p className='product-price'>{formatCurrencyNumber(product.price)}</p>
                <p className='product-category'>{product.category}</p>
            </div>
        </div>
    )
}