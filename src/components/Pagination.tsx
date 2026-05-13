import { useEffect, useMemo, useState } from "react"
import PaginationButton from "./PaginationButton"

type PaginationProps = {
    currentPage: number,
    totalPages: number,
    setCurrentPage: (page: number) => void,
}

const SEPARATOR = "SEPARATOR" as const;
type Separator = typeof SEPARATOR;

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
    const pageButtons = useMemo(() => {
        const buttons: (number | Separator)[] = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(i);
            }
            return buttons;
        }

        buttons.push(1);
        if (currentPage > 4) {
            buttons.push(SEPARATOR);
        }
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) {
            buttons.push(i);
        }

        if (currentPage < totalPages - 3) {
            buttons.push(SEPARATOR);
        }

        buttons.push(totalPages);
        return buttons;
    }, [currentPage, totalPages]);

    return (
        <div>
            <PaginationButton
                label="Back"
                currentPage={currentPage}
                pageNumber={Math.max(currentPage - 1, 1)}
                totalPages={totalPages}
                setCurrentPage={(page) => setCurrentPage(page)}
            />
            {pageButtons.map(value => (
                value === SEPARATOR
                    ? <span className="separator">…</span>
                    : <PaginationButton
                        key={value}
                        currentPage={currentPage}
                        pageNumber={value}
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

