const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/medicsbay").then(() => {
    console.log("Database connected successfully!");
}).catch((e) => {
    console.log("Database not connected error. " + e);
})