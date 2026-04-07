import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'

export const Route = createFileRoute('/')({ component: App })

function App() {
    return (
        <main className="page-wrap px-4 pb-8 pt-14">
            <Navbar />
        </main>
    )
}
