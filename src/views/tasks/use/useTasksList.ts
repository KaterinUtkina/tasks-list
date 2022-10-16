import listData from "../../../test-data/test-data.json";
export function useTasksList() {
    const list = listData.list;

    return {
        list
    }
}
