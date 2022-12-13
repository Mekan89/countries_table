import { useMemo, useState } from "react";

const useSortableData = (items: any[], config: { key: string; direction: string }) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key: any) => {
        let direction = "descending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "descending") {
            direction = "ascending";
        }
        setSortConfig({ key, direction });
    };

    return { sortedItems, requestSort, sortConfig };
};

export default useSortableData;
