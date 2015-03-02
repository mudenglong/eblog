var express = require('express');
var router = express.Router();

module.exports = function(app) {
    /* GET home page. */
    app.get('/', function (request, response, next) {
        console.log(request.query.a);
        response.render('index', { title: 'testExpress' });
    });
};