import { AppDataSource } from "./data-source"
import express, { Express } from 'express';
import routes from "./router";
import cors from "cors";
import bodyParser from 'body-parser';


AppDataSource.initialize().then(async () => {
    const app: Express = express();
    const port = "8080";
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(routes);
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });

}).catch(error => console.log(error))
