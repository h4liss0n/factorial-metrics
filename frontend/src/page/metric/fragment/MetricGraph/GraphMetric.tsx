import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '../../../../components/Box/Box';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Metric } from '../../../../model/metric';
import { groupMetricBy } from '../../../../service/GraphService';
import { MetricService } from '../../../../service/MetricService';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

type FilterType = "day" | "hour" | "minute"


interface GraphMetricProps {
    metrics: Metric[]
}


export const GraphMetric: React.FC<GraphMetricProps> = ({ metrics }) => {
    const [groupBy, setGroupBy] = useState<FilterType>("day")

    const data = useMemo(() => {
        const resultArray = groupMetricBy(metrics, groupBy)
        return {
            labels: resultArray.flatMap(el => el.key),
            datasets: [
                {
                    label: 'Total',
                    data: resultArray.flatMap(el => el.total),
                    backgroundColor: 'rgba(4, 0, 255, 0.5)',
                },

                {
                    label: 'Average',
                    data: resultArray.flatMap(el => el.average),
                    backgroundColor: 'rgba(0, 241, 249, 0.5)',
                },
                {
                    label: 'Count',
                    data: resultArray.flatMap(el => el.count),
                    backgroundColor: 'rgba(249, 91, 0, 0.5)',
                },

            ],
        }
    }, [metrics, groupBy])


    const handleChangeGroupBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const group = event.target.value as FilterType
        setGroupBy(group)
    }


    return (
        <Box>
            <header>
                <h1>metric</h1>
            </header>
            <main>
                <Line options={options} data={data} />
            </main>
            <footer>
                <label htmlFor="filter">filter: </label>
                <select name="filter" onChange={handleChangeGroupBy} >
                    <option value="day">day</option>
                    <option value="hour">hour</option>
                    <option value="minute">minute</option>
                </select>
            </footer>
        </Box>
    )
}