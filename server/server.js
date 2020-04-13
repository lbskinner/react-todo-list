const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const taskRouter = require("./routes/task.router");

const PORT = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); // need for axios requests
app.use(express.static("build"));

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
