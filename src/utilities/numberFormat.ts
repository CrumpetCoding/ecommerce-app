export function formatCurrencyNumber(value: number): string {
    return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 2, minimumFractionDigits: 2, })
        .format(value);
}