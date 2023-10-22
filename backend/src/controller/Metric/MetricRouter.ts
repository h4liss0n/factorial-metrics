import { Router } from "express";
import MetricController from "./MetricController";

const MetricRouter = Router();
MetricRouter.get("/api/v1/metric", MetricController.getAll);
MetricRouter.post("/api/v1/metric", MetricController.create);

export default MetricRouter;