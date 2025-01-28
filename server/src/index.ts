import express from "express";

console.log("Start");

const app = express();

const PORT = 7000;

app.listen(PORT, (error) => {
  if (error) console.log("Error in server setup");
  console.log("Server is running", PORT);
});
