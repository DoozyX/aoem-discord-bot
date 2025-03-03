import { DateTime } from 'luxon';

export function formatDate(date: Date): string {
    return DateTime.fromJSDate(date).toUTC().toFormat('yyyy-MM-dd HH:mm') + ' UTC';
}

export function formatDateUnix(date: number): string {
    return DateTime.fromMillis(date).toUTC().toFormat('yyyy-MM-dd HH:mm') + ' UTC';
}

export function parseDate(date: string | null, time: string | null): Date | null {
    if (!date && !time) {
        return null;
    }

    // Get current date as base
    const now = DateTime.utc();

    let targetDate = DateTime.utc();

    // Parse date if provided
    if (date) {
        const [year, month, day] = date.split('-').map(number => Number.parseInt(number, 10));

        if (
            !year ||
            !month ||
            !day ||
            Number.isNaN(year) ||
            Number.isNaN(month) ||
            Number.isNaN(day)
        ) {
            throw new Error('Invalid date format. Use YYYY-MM-DD');
        }

        targetDate = targetDate.set({ year, month, day });
    }

    // Parse time if provided
    if (time) {
        const timeMatch = time.match(/^(\d{1,2})(?::(\d{2}))?$/);

        if (!timeMatch) {
            throw new Error('Invalid time format. Use HH:mm or HH');
        }

        const hour = Number.parseInt(timeMatch[1], 10);
        const minute = timeMatch[2] ? Number.parseInt(timeMatch[2], 10) : 0;

        if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
            throw new Error('Invalid time values');
        }

        targetDate = targetDate.set({ hour, minute });
    }

    // Validate that the target date is in the future
    if (targetDate < now) {
        throw new Error('The specified date/time must be in the future');
    }

    return targetDate.toJSDate();
}
