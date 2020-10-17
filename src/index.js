var express = require("express");
var app = express();

app.get("*", function (req, res) {
  res.redirect('https://dropbox.com'+req.url)
});

app.listen(80);
