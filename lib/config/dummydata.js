'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Event = mongoose.model('Event'),
  Recipe = mongoose.model('Recipe');

/**
 * Populate database with sample application data
 */


// Clear old users, then add a default user
  var date = new Date();
  var myDate = {
    day : date.getDate(),
    month : date.getMonth(),
    year : date.getFullYear(),
  };
Event.find({}).remove();

Recipe.find({}).remove(function() {
  Recipe.create(
      {
        title: 'Stuffed Peppers with Tomato Basil Cream Sauce',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 1)],
        source: 'http://www.yummly.com/recipe/Stuffed-peppers-with-tomato-basil-cream-sauce-333479?columns=5'
      },
      {
        title: 'Steak and Scallops with Champagne-Butter Sauce',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 2)],
        source: 'http://www.yummly.com/recipe/Steak-and-scallops-with-champagne-butter-sauce-344478?columns=5'
      },
      {
        title: 'Pan Seared Salmon with Avocado Remoulade',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 3)],
        source: 'http://www.yummly.com/recipe/Pan-Seared-Salmon-with-Avocado-Remoulade-Simply-Recipes-42712?columns=5'
      },
      {
        title: 'Parmesan Crusted Chicken',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 4)],
        source: 'http://www.yummly.com/recipe/Parmesan-crusted-chicken-350742?columns=5'
      },
      {
        title: 'Black Bean and Guac Burritos',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 5)],
        source: 'http://www.yummly.com/recipe/Black-Bean-and-Guac-Burritos-Naturally-Ella-46521?columns=5'
      },
      {
        title: 'Honey Garlic Chicken Slow Cooker',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 6)],
        source: 'http://www.yummly.com/recipe/Honey-garlic-chicken-slow-cooker-310273?columns=5'
      },
      {
        title: 'White Wine Spaghetti with Bacon and Parmesan',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/White-wine-spaghetti-with-bacon-and-parmesan-369084?columns=5'
      },
      {
        title: 'Chicken Breasts with Cilantro and Red Thai Curry Peanut',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Chicken-breasts-with-cilantro-and-red-thai-curry-peanut-sauce-309929?columns=5'
      },
      {
        title: 'Easy Teriyaki Chicken',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Easy-Teriyaki-Chicken-506065?columns=5'
      },
      {
        title: 'Cold Sesame Noodles with Roasted Pork',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Cold-sesame-noodles-with-roasted-pork-373251'
      },
      {
        title: 'Salsa Verde Burgers',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Salsa-Verde-Burgers-500670?columns=5'
      },
      {
        title: 'Penne Pasta with Spicy Italian Sausage, Mushrooms, and ',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Penne-pasta-with-spicy-italian-sausage_-mushrooms_-and-spinach-309390'
      },
      {
        title: 'Sausage Pepper Skillet',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Sausage-Pepper-Skillet-TasteOfHome?columns=5'
      },
      {
        title: 'Lemon Pepper Chicken & Rice',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Lemon-pepper-chicken-_-rice-297488?columns=5'
      },
      {
        title: 'Broccoli Sausage Simmer',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Broccoli-Sausage-Simmer-TasteOfHome?columns=5'
      },
      {
        title: 'Chicken with Peas and Quinoa',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Chicken-with-Peas-and-Quinoa-AllRecipes-39993?columns=5'
      },
      {
        title: 'Spicy Vegan Peanut Butter Tofu with Sriracha',
        name: 'Test',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/Spicy-vegan-peanut-butter-tofu-with-sriracha-309185?columns=5'
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
