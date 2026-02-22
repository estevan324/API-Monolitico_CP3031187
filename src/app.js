const express = require("express");

const usersRoutes = require("./routes/user.routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`);
});
