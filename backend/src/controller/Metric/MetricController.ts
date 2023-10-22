import { NextFunction, Request, Response } from 'express';
import { Metric } from '../../entity/Metric';
import { AppDataSource } from '../../data-source';


class MetricController {
    static getAll = async (request: Request, response: Response, next: NextFunction) => {
        const metricRepository = AppDataSource.getRepository(Metric)
        const metrics = await metricRepository.find()
        response.send(metrics)
    }

    static create = async (request: Request, response: Response, next: NextFunction) => {
        console.log(request.body)

        const { name, value, dueDate } = request.body

        try {
            const metric = new Metric();
            metric.name = name
            metric.value = Number(value)
            metric.dueData = new Date(dueDate)
            const metricRepository = AppDataSource.getRepository(Metric)
            const savedMetric = await metricRepository.save(metric);
            response.status(201).send(savedMetric)
        } catch (error) {
            response.status(400).send({ error: error.message });
        }
    }
}

export default MetricController