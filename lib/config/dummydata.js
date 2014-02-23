'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  Event = mongoose.model('Event'),
  Recipe = mongoose.model('Recipe');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
  var date = new Date();
  var myDate = {
    day : date.getDate(),
    month : date.getMonth(),
    year : date.getFullYear(),
  };
Event.find({}).remove(function() {
  Event.create(

   function() {
      console.log('finished populating events');
    }
  );
});

Recipe.find({}).remove(function() {
  Recipe.create(
      {
        title: 'Stuffed Peppers with Tomato Basil Cream Sauce',
        scheduled: [new Date(myDate.year, myDate.month, 1)],
        url: 'http://www.yummly.com/recipe/Stuffed-peppers-with-tomato-basil-cream-sauce-333479?columns=5'
      },
      {
        title: 'Steak and Scallops with Champagne-Butter Sauce',
        scheduled: [new Date(myDate.year, myDate.month, 2)],
        url: 'http://www.yummly.com/recipe/Steak-and-scallops-with-champagne-butter-sauce-344478?columns=5'
      },
      {
        title: 'Pan Seared Salmon with Avocado Remoulade',
        scheduled: [new Date(myDate.year, myDate.month, 3)],
        url: 'http://www.yummly.com/recipe/Pan-Seared-Salmon-with-Avocado-Remoulade-Simply-Recipes-42712?columns=5'
      },
            {
        title: 'Parmesan Crusted Chicken',
        scheduled: [new Date(myDate.year, myDate.month, 4)],
        url: 'http://www.yummly.com/recipe/Parmesan-crusted-chicken-350742?columns=5'
      },
            {
        title: 'Black Bean and Guac Burritos',
        scheduled: [new Date(myDate.year, myDate.month, 5)],
        url: 'http://www.yummly.com/recipe/Black-Bean-and-Guac-Burritos-Naturally-Ella-46521?columns=5'
      },
      {
        title: 'Honey Garlic Chicken Slow Cooker',
        scheduled: [new Date(myDate.year, myDate.month, 6)],
        url: 'http://www.yummly.com/recipe/Honey-garlic-chicken-slow-cooker-310273?columns=5'
      },
      {
        title: 'White Wine Spaghetti with Bacon and Parmesan',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/White-wine-spaghetti-with-bacon-and-parmesan-369084?columns=5'
      },
      {
        title: 'Chicken Breasts with Cilantro and Red Thai Curry Peanut',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Chicken-breasts-with-cilantro-and-red-thai-curry-peanut-sauce-309929?columns=5'
      },
      {
        title: 'Easy Teriyaki Chicken',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Easy-Teriyaki-Chicken-506065?columns=5'
      },
      {
        title: 'Cold Sesame Noodles with Roasted Pork',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Cold-sesame-noodles-with-roasted-pork-373251'
      },
      {
        title: 'Salsa Verde Burgers',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Salsa-Verde-Burgers-500670?columns=5'
      },
      {
        title: 'Penne Pasta with Spicy Italian Sausage, Mushrooms, and ',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Penne-pasta-with-spicy-italian-sausage_-mushrooms_-and-spinach-309390'
      },
      {
        title: 'Sausage Pepper Skillet',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Sausage-Pepper-Skillet-TasteOfHome?columns=5'
      },
      {
        title: 'Lemon Pepper Chicken & Rice',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Lemon-pepper-chicken-_-rice-297488?columns=5'
      },
      {
        title: 'Broccoli Sausage Simmer',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Broccoli-Sausage-Simmer-TasteOfHome?columns=5'
      },
      {
        title: 'Chicken with Peas and Quinoa',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Chicken-with-Peas-and-Quinoa-AllRecipes-39993?columns=5'
      },
      {
        title: 'Spicy Vegan Peanut Butter Tofu with Sriracha',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        url: 'http://www.yummly.com/recipe/Spicy-vegan-peanut-butter-tofu-with-sriracha-309185?columns=5'
      },
   function() {
      console.log('finished populating recipes');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
