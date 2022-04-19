const express = require('express');
const app = express();
const router = require("../server/router/route");

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(function(req, res, next){
    console.log(req.url, req.body);
    next();
})

app.use("/public", express.static("public"))
app.use("", router);

app.use((req, res, next) => {
    res.end("page not found");
    //next();
});
app.listen(3000, () => {console.log("listening 3000..")});
