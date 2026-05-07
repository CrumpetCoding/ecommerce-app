import "./PaginationButton.css";

type PaginationButtonProps = {
    currentPage: number,
    pageNumber: number,
    totalPages: number,
    setCurrentPage: (page: number) => void,
    label?: string,
}

export default function PaginationButton({ currentPage, pageNumber, totalPages, setCurrentPage, label }: PaginationButtonProps) {
    const hasLabel: boolean = !!label;

    return (
        <button
            className={"pagiantion-btn " + ((currentPage === pageNumber && !hasLabel) ? "active" : "")}
            onClick={() => setCurrentPage(pageNumber)}
            disabled={pageNumber > totalPages || currentPage === pageNumber}
        >
            {hasLabel ? label : pageNumber}
        </button>
    )
}