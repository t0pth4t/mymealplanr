'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    recipes = require('./controllers/recipes');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/recipes', api.recipes);
  app.get('/api/events', api.events);
  app.post('/api/users', users.create);
  app.put('/api/users',middleware.auth, users.changePassword);
  app.get('/api/users/me',middleware.auth, users.me);
  app.get('/api/users/:id', users.show);
  app.get('/api/recipe',recipes.show);
  app.post('/api/recipe',middleware.auth,recipes.create);
  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};