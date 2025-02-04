export function isValidEnumValue<T extends object>(enumObject: T, value: string): boolean {
    return Object.values(enumObject).includes(value as T[keyof T]);
}
