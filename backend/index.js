import express from "express";
import router from "./router.js";

const app = express();
const port = 3001;

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
