const express = require('express');
const env = require('dotenv');
env.config();
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = process.env.PORT || 8081

app.use(express.json());
app.use("/user", userRoutes);

app.listen(port, () => {
    console.log("Server is running on " + port);
})

