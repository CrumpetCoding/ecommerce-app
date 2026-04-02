import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { getSingleProduct } from '../../api'
import ProductPage from '../../components/ProductPage';

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params }) => getSingleProduct(params.productId),
  component: RouteComponent,
})

function RouteComponent() {
  const product = useLoaderData({ from: '/products/$productId' })

  if (!product) {
    return (
      <p>No product found! You spanner...</p>
    )
  }

  return <ProductPage product={product} />
}