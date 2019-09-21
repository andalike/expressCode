//Express JS components
var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 7879);


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.post('/samplePost', function (req, res) {
    console.log("Inside sampePost");
    var resSamplePost = {};
    var name = req.body.name;
    var classOfStudent = req.body.class;
    resSamplePost.status = 'success';
    res.json(resSamplePost);
});

app.listen(app.get('port'));