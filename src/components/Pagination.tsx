import { useMemo } from "react"
import PaginationButton from "./PaginationButton"

type PaginationProps = {
    currentPage: number,
    totalPages: number,
    setCurrentPage: (page: number) => void,
}

const SEPARATOR = "SEPARATOR" as const;

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
    const pageButtons = useMemo(() => {
        const buttons: (number | typeof SEPARATOR)[] = [];

        // Case 1: Total pages are less than or equal to the max size
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) buttons.push(i);
            return buttons;
        }

        // Determine if we need separators
        const showLeftSeparator = currentPage > 4;
        const showRightSeparator = currentPage < totalPages - 3;

        if (!showLeftSeparator && showRightSeparator) {
            // Case 2: Near the start [1, 2, 3, 4, 5, SEPARATOR, totalPages]
            for (let i = 1; i <= 5; i++) buttons.push(i);
            buttons.push(SEPARATOR);
            buttons.push(totalPages);
        } else if (showLeftSeparator && !showRightSeparator) {
            // Case 3: Near the end [1, SEPARATOR, totalPages-4, ..., totalPages]
            buttons.push(1);
            buttons.push(SEPARATOR);
            for (let i = totalPages - 4; i <= totalPages; i++) buttons.push(i);
        } else {
            // Case 4: Middle [1, SEPARATOR, current-1, current, current+1, SEPARATOR, totalPages]
            buttons.push(1);
            buttons.push(SEPARATOR);
            buttons.push(currentPage - 1);
            buttons.push(currentPage);
            buttons.push(currentPage + 1);
            buttons.push(SEPARATOR);
            buttons.push(totalPages);
        }

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

