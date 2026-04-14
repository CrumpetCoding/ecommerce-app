import { getAllProducts } from '@/api'
import Pagination from '@/components/Pagination'
import { createFileRoute, useNavigate, type SearchSchemaInput } from '@tanstack/react-router'

type SearchParams = {
  page: number
  pageSize: number,
}

export const Route = createFileRoute('/products/')({
  validateSearch: (
    input: Partial<SearchParams> & SearchSchemaInput,
  ) => {
    return {
      page: input?.page ? Number(input?.page) : 1,
      pageSize: input?.pageSize ? Number(input?.pageSize) : 10,
    }
  },
  loader: (params) => {
    const { page, pageSize } = params.location.search as SearchParams;
    return getAllProducts({
      currentPage: page ?? 1,
      pageSize: pageSize ?? 10,
    })
  },
  loaderDeps: ({ search: { page, pageSize } }) => ({ page, pageSize }),
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();  // <-- Add this
  const { page, pageSize } = Route.useSearch();  // <-- Add this to access current params
  const paginationData = Route.useLoaderData();
  const products = paginationData?.data || []; // Extract the products array; fallback to empty if undefined

  const changePage = (newPage: number) => {
    navigate({ search: { page: newPage, pageSize } });
  };

  return (
    <div>
      <h1>Product list</h1>
      Render products in a list
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price} ({product.category})
          </li>
        ))}
      </ul>
      <Pagination currentPage={page} setCurrentPage={changePage} totalPages={paginationData.pages} />
    </div>
  )
}
