import { Metric } from "../model/metric"

export const MetricService = {
    get: async () => {
        const res = await fetch("http://localhost:8080/api/v1/metric")
        const metrics = await res.json() as Metric[]
        return metrics
    }

}
