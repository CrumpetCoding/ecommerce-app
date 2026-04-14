type PaginationProps = {
    currentPage: number,
    totalPages: number,
    setCurrentPage: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
    return (
        <div>
            <button className="pagiantion-btn" disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)} >Back</button>
            <span>{currentPage}</span>
            {[1, 2, 3, 4, 5, totalPages].map(num => (
                <button
                    className={"pagiantion-btn " + (currentPage === num ? "active" : "")}
                    onClick={() => setCurrentPage(num)}
                >
                    {num}
                </button>
            ))}
            <button className="pagiantion-btn" disabled={currentPage >= totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
    )
}

