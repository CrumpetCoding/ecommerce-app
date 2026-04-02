// Search for Intl.NumberFormat in MDN to get started

// If you pass 1000 -> 1,000
export function formatNumber(value: number): string {
    return value.toString();
}

// If you pass 1000 -> $1,000
export function formatCurrencyNumber(value: number): string {
    return value.toString();
}