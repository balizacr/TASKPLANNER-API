const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4242;

users = [{"email":"d@d.com", "pass":"temp"}, {"email":"a@a.com", "pass":"algo"}];
user = {"email":"d@d.com", "pass":"temp"};

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:4242', "http://locahot:4200"]
}));

app.post('/login', (req, res) => {
    // logica para hacer login
    let log = false;
    if (req.body.email == user.email && req.body.pass == user.pass) {
        log = true;
    };
    res.send(log)
});

app.post("/register", (req, res) => {
    // if (req.body.)
});



app.listen(port, () => {
    console.log(`listening in port ${port}!`)
  });