const express = require('express');

const app = express();

let myData = [
    {id:1, color:"red", x:50, y: 200},
    {id:2, color:"orange", x:100, y: 200},
    {id:3, color:"yellow", x:150, y: 200},
    {id:4, color:"green", x:200, y: 200},
    {id:5, color:"blue", x:250, y: 200},
    {id:6, color:"purple", x:300, y: 200}
];

app.get("/", (request, response) => {
    response.send("hello lovely person");
});

// our API

// GET - /api
app.get("/api", (request, response) => {
    response.json(myData);
});

app.listen(3030, () => {
    console.log("check out the magic at: http://localhost:3030")
})

