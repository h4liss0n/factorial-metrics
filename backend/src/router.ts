import { Router } from "express";
import MetricRouter from "./controller/Metric/MetricRouter";

const routes = Router();

routes.use(MetricRouter);

export default routes;

