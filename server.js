const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGO_URI);
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");


connectDB();
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

