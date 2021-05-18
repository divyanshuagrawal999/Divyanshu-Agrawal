const { response } = require("express");
const express = require("express");
const bodyparser = require("body-parser");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
});


app.post("/index.html", function (req, res) {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    // var sq = n2*n2;
    var result = n1/(n2*n2);

    res.send("Your BMI is calculated as "+ result);
})


app.listen(3000, function () {
    console.log("server has started on port 3000");

});
