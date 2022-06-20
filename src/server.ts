/* eslint-disable no-unused-vars */
import express from "express";
import Controller from "./services/Controller";
import database from "./services/Database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Unique route for api.
 */
app.get("/", async (req, res) => {
  await database.sync();

  const { controller, method, params } = req.body.action;

  const response = await new Controller(
    controller,
    method,
    params
  ).callMethod();

  res.send({
    response,
  });
});

/**
 * Initialize the ser on port declared in .env.
 */
app.listen(process.env.SERVER_PORT, () => {
  console.log(`
  App ${process.env.APP_NAME} listening on port ${process.env.SERVER_PORT}
  `);
});
