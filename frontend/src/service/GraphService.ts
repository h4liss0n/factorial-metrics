import { Metric } from "../model/metric";

export const groupMetricBy = (metric: Metric[], field: "minute" | "hour" | "day") => {

    const formatBy = (dueDate: Date) => {
        switch (field) {
            case "day":
                return dueDate.toLocaleDateString("us", { day: "2-digit" })
            case "minute":
                return dueDate.toLocaleDateString("us", { minute: "2-digit" })
            case "hour":
                return dueDate.toLocaleDateString("us", { hour: "2-digit" })
        }
    }

    const groupedData = metric.reduce<{ [key: string]: { total: number; count: number } }>((result, item) => {
        const dueDate = new Date(item.dueData);
        const groupBy = formatBy(dueDate)

        if (!result[groupBy]) {
            result[groupBy] = { total: 0, count: 0 };
        }

        result[groupBy].total += item.value;
        result[groupBy].count += 1;
        return result;
    }, {});

    const groupedWithAverages = Object.entries(groupedData).map(([key, { total, count }]) => ({
        key,
        count,
        total,
        average: total / count // Calculate the average
    }));

    return groupedWithAverages;
}
