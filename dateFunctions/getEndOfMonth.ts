/**
 * Gets the last date of the month for a given date.
 * 
 * @param date - The Date object to get the month's end date from.
 * @returns A new Date object representing the last day of the month.
 */
export function getEndOfMonth(date: Date): Date {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay;
}

// Example usage:
// const date = new Date('2024-09-15');
// getEndOfMonth(date); // Gets '2024-09-30'