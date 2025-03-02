import { DateTime } from 'luxon';

export function formatDate(date: Date): string {
    return DateTime.fromJSDate(date).toUTC().toFormat('yyyy-MM-dd HH:mm:ss') + 'UTC';
}

export function formatDateUnix(date: number): string {
    return DateTime.fromMillis(date).toUTC().toFormat('yyyy-MM-dd HH:mm') + 'UTC';
}
