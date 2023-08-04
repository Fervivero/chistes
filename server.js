const express = require("express");


const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require("./config/mongoose.config");

const JokesRoutes = require("./routes/jokes.routes");
JokesRoutes(app);

app.listen(port, () => console.log(`El servidr está funcionando en el puerto: ${port}`));