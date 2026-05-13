import { type Product } from '@/api'
import { formatCurrencyNumber } from '@/utilities/numberFormat'

export default function ProductCard({ product }: { product: Product }) {
    return (
        <li>
            <strong>Product card: </strong>
            {product.title} - {formatCurrencyNumber(product.price)} ({product.category})
        </li>
    )
}