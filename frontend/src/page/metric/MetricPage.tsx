import { useCallback, useEffect, useState } from "react"
import { Metric } from "../../model/metric"
import { MetricCreate } from "./fragment/MetricCreate/MetricCreate"
import { GraphMetric } from "./fragment/MetricGraph/GraphMetric"
import { MetricService } from "../../service/MetricService"


export const MetricPage = () => {
    const [metrics, setMetrics] = useState<Metric[]>([])

    const getMetric = useCallback(async () => {
        const metric = await MetricService.get()
        setMetrics(metric)
    }, [setMetrics])

    useEffect(() => {
        getMetric()
    }, [])

    const handleSave = () => {
        getMetric()
    }

    return <>
        <GraphMetric metrics={metrics} />
        <MetricCreate onSave={handleSave} />
    </>
}