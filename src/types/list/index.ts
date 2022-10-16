export namespace List {
    export type Item = {
        id: number,
        date: string,
        tasks: TaskItem[],
    }

    export type TaskItem = {
        title: string,
        description: string,
    }
}
