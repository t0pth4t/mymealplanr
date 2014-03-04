'use strict';

var express = require('express'),
    path = require('path'),
    config = require('./config'),
    passport = require('passport'),
    helmet = require('helmet'),
    mongoStore = require('connect-mongo')(express);

/**
 * Express configuration
 */
module.exports = function(app) {
  app.configure('development', function(){
    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));
    app.use(express.errorHandler());
    app.set('views', config.root + '/app/views');
  });

  app.configure('production', function(){
    app.use(express.favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.use(function(req, res, next) {
        var reqType = req.headers["x-forwarded-proto"];
        reqType == 'https' ? next() : res.redirect("https://" + req.headers.host + req.url);
    });
    app.set('views', config.root + '/views');
  });

  app.configure(function(){
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.logger('dev'));
    app.use(helmet.xframe());  
    app.use(helmet.iexss());  
    app.use(helmet.contentTypeOptions());  
    app.use(helmet.cacheControl());  
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser());

    // Persist sessions with mongoStore
    app.use(express.session({
      secret: 'VMnw!n4j74R64#8*1tCxwFo3Z2S!8o*l*vSO3J^J',
      cookie: { maxAge: 3600000 },  
      store: new mongoStore({
        url: config.mongo.uri,
        collection: 'sessions',
        clear_interval: 3600
      }, function () {
          console.log("db connection open");
      })
    }));

    //use passport session
    app.use(passport.initialize());
    app.use(passport.session());
    
    // Router needs to be last
    app.use(app.router);
  });
};