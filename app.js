const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const calculateRouter = require("./src/routes/api/calculate");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

require("dotenv").config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Calculate",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "https://test-task-calculate.herokuapp.com",
        description: "API base URL",
      },
    ],
  },
  apis: [path.join(process.cwd(), "/SwaggerDocs/*.js")],
};

const specs = swaggerJsDoc(options);

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/api/calculator", calculateRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
