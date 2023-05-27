const express = require("express");
const router=require('./routes/routes');
const cors=require('cors');

const connectDb=require('./db/db');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/",router);
app.use(cors());
require('dotenv').config({path:'./config.env'});
connectDb();

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));