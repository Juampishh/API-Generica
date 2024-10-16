import express, { Application } from "express";
import morgan from "morgan";
import IndexRoutes from "./routes/index.routes";
import UserRoutes from "./routes/user.routes";
import AuthRoutes from "./routes/auth.routes";

var cors = require("cors");
require("dotenv").config();
export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", this.port || process.env.PORT);
  }
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }
  routes() {
    this.app.use(cors());
    this.app.use(IndexRoutes);
    this.app.use("/users", UserRoutes);
    this.app.use("/auth", AuthRoutes);
  }
  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}
