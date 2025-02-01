export interface EventHandler {
    process(...arguments_: any[]): Promise<void>;
}
