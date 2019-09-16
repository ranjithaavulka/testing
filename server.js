var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');

var mongoose       = require('mongoose');                     // mongoose for mongodb


var db = require('./config/db');
var port = process.env.PORT || 5555; 
mongoose.connect(db.url); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
console.log("pppppppppppppppppppppppppppppppppppppppp");//1st change
console.log("ddddddddddddddddddddd");//2nd change
console.log("hhhhhh");//3rd change
console.log("pppppppppppppppppppppppppppppppppppppppp");//1st change
console.log("ddddddddddddddddddddd");//2nd change
console.log("hhhhhh");//3rd change
