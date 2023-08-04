const mongoose = require("mongoose");
const db_name = "api_jokes";


mongoose.connect("mongodb://localhost/api_jokes", {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    }).then(() => console.log(`Successfully connected to ${db_name} database`))
    .catch((err) => console.log(`Error connecting to ${db_name} database`, err));