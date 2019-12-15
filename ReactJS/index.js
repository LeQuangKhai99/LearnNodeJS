var express = require("express");
var app = express();
app.use(express.static("Public"));
app.set("view engine", "ejs");
app.set("views", "./view");
app.listen(3000);

app.get("/", function (req, res) {
    res.render("trangchu");
});