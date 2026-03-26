import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { getSingleProduct } from '../../api'

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params }) => getSingleProduct(+params.productId), // TODO: Check if it is not a string
  component: RouteComponent,
})

function RouteComponent() {
  const { productId } = Route.useParams();
  const product = useLoaderData({ from: '/products/$productId' })

  return (<div>
    <h1>Id: {productId}</h1>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <img src={product.image} alt={`Image of a ${product.title}`} />
  </div>)
}