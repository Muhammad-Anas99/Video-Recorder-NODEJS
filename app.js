import http from "http";
import express from "express";
import dotenv from "dotenv";
import path from "path";
const app = express();
const server = http.createServer(app);

dotenv.config();
app.use(express.static(path.resolve("public")));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("SERVER START AT PORT: ", PORT);
});
