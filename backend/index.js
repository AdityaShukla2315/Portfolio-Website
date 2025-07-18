const express = require("express");
const app = express();
require("dotenv").config();
const {dbConnect} = require("./config/database");
const routes = require("./routes/user");
const cors = require("cors");


const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


// database connect
dbConnect();

// mounting routes
app.use("/api/v1", routes);

// root route for welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio Backend API!');
});

// listening 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});