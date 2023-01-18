const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//to avoid cors error
app.use(cors());
app.use(express.urlencoded({
      extended: false
}));

app.use(express.json());

//DATABASE CONNECTION ESTABLISHED
mongoose.set('strictQuery', true);
const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGO_URL, connectionParams)
      .then(() => console.log("DATABASE CONNECTION ESTABLISHED."))
      .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.use('/api/users', require("./routes/User"));
app.use('/api/auth', require("./routes/Auth"));
app.use('/api/products', require("./routes/Product"));
app.use('/api/carts', require("./routes/Cart"));
app.use('/api/orders', require("./routes/Order"));
app.use('/api/checkout', require("./routes/stripe"));

//listening server 
app.listen(port, () => {
      console.log(`listening to the port ${port}......`);
});