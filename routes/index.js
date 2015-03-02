var express = require('express');
var router = express.Router();

module.exports = function(app) {
    /* GET home page. */
    app.get('/', function (request, response, next) {
        response.render('index', { title: '主页' });
    });
    app.get('/reg', function (request, response) {
        request.render('reg', { title: '注册' });
    });
    // app.post('/reg', function (request, response) {

    // });
    app.get('/login', function (request, response) {
        request.render('login', { title: '登录' });
    });
    // app.post('/login', function (request, response) {
        
    // });
    app.get('/post', function (request, response) {
        request.render('post', { title: '发表' });
    });
    // app.post('/post', function (request, response) {

    // });
    // app.get('/logout', function (request, response) {

    // });

};