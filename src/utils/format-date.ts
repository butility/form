
export function formatDate(date: Date, format?: 'ISO' | 'UTC' | 'Locale'): string {
    switch (format) {
        case 'ISO':
            return date.toISOString();
        case 'UTC':
            return date.toUTCString();
        case 'Locale':
            return date.toLocaleString(); // Default locale
        default:
            return date.toDateString(); // Fallback to a simple date string
    }
}
  