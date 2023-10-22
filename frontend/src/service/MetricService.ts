import { Metric } from "../model/metric";

interface MetricServiceInterface {
  get: () => Promise<Metric[]>;
  save: (body: string) => Promise<Metric>;
}

class MetricServiceApi implements MetricServiceInterface {
  async get(): Promise<Metric[]> {
    const res = await fetch("http://localhost:8080/api/v1/metric");
    const metrics = (await res.json()) as Metric[];
    return metrics;
  }

  async save(body: string): Promise<Metric> {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    };
    const res = await fetch(
      "http://localhost:8080/api/v1/metric",
      requestOptions,
    );
    const json = (await res.json()) as Metric;
    return json;
  }
}

const LOCAL_METRICS: Metric[] = [];

class MetricServiceLocal implements MetricServiceInterface {
  async get(): Promise<Metric[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...LOCAL_METRICS]);
      }, 100);
    });
  }

  async save(body: string): Promise<Metric> {
    return new Promise((resolve) => {
      const metricData = JSON.parse(body);
      const metric: Metric = {
        id: Math.random(),
        name: metricData.name,
        value: Number(metricData.value),
        dueDate: metricData.dueDate,
      };
      LOCAL_METRICS.push(metric);
      setTimeout(() => {
        resolve(metric);
      }, 100);
    });
  }
}

export const metricService = process.env.REACT_APP_FF_USE_LOCAL
  ? new MetricServiceLocal()
  : new MetricServiceApi();
