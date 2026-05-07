import PaginationButton from "./PaginationButton"

type PaginationProps = {
    currentPage: number,
    totalPages: number,
    setCurrentPage: (page: number) => void,
}

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {

    return (
        <div>
            <PaginationButton
                label="Back"
                currentPage={currentPage}
                pageNumber={Math.max(currentPage - 1, 1)}
                totalPages={totalPages}
                setCurrentPage={(page) => setCurrentPage(page)}
            />
            {[1, 2, 3, 4, 5].map(num => (
                <PaginationButton
                    key={num}
                    currentPage={currentPage}
                    pageNumber={num}
                    totalPages={totalPages}
                    setCurrentPage={(page) => setCurrentPage(page)}
                />
            ))}
            <PaginationButton
                label="Next"
                currentPage={currentPage}
                pageNumber={Math.min(currentPage + 1, totalPages)}
                totalPages={totalPages}
                setCurrentPage={(page) => setCurrentPage(page)}
            />
        </div>
    )
}

