import { createFileRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <main className="page-wrap px-4 py-12">
            <h1>About page</h1>
        </main>
    )
}
