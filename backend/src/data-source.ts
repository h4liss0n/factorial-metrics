import "reflect-metadata"
import { DataSource } from "typeorm"
import { Metric } from "./entity/Metric"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "metric",
    synchronize: true,
    logging: false,
    entities: [Metric],
    migrations: [],
    subscribers: [],
})
