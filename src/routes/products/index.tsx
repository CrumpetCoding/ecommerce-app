import { getAllProducts } from '@/api'
import { createFileRoute } from '@tanstack/react-router'

type SearchParams = {
  page: number,
}

export const Route = createFileRoute('/products/')({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      page: Number(search?.page) || 1, // Default to page 1
    }
  },
  loader: ({ search: { page } }) => {
    return getAllProducts({
      currentPage: page,
      pageSize: 10,
    })
  },
  component: RouteComponent,
})


function RouteComponent() {
  return <div>
    <h1>Product list</h1>
  </div>
}
