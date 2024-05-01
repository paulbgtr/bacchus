import express from "express";
import router from "./router.js";
import cors from "cors";

const app = express();

app.use(cors());

const port = 3001;

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
