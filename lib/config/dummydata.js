'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Event = mongoose.model('Event'),
  Recipe = mongoose.model('Recipe');

/**
 * Populate database with sample application data
 */

  var date = new Date();
  var myDate = {
    day : date.getDate(),
    month : date.getMonth(),
    year : date.getFullYear(),
  };
Event.find({'name':'Test User'}).remove(function(){
    Event.create(
      {
        title: 'Stuffed Peppers with Tomato Basil Cream Sauce',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 1),
      },
      {
        title: 'Steak and Scallops with Champagne-Butter Sauce',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 2)
      },
      {
        title: 'Pan Seared Salmon with Avocado Remoulade',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 3)
      },
      {
        title: 'Parmesan Crusted Chicken',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 4)
      },
      {
        title: 'Black Bean and Guac Burritos',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 5)
      },
      {
        title: 'Honey Garlic Chicken Slow Cooker',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 6)
      },
      {
        title: 'White Wine Spaghetti with Bacon and Parmesan',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 7)
      },
      {
        title: 'Chicken Breasts with Cilantro and Red Thai Curry Peanut',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 8)
      },
      {
        title: 'Easy Teriyaki Chicken',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 9)
      },
      {
        title: 'Cold Sesame Noodles with Roasted Pork',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 10)
      },
      {
        title: 'Salsa Verde Burgers',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 11)
      },
      {
        title: 'Penne Pasta with Spicy Italian Sausage, Mushrooms, and ',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 12)
      },
      {
        title: 'Sausage Pepper Skillet',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 13)
      },
      {
        title: 'Lemon Pepper Chicken & Rice',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 14)
      },
      {
        title: 'Broccoli Sausage Simmer',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 15)
      },
      {
        title: 'Chicken with Peas and Quinoa',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 16)
      },
      {
        title: 'Spicy Vegan Peanut Butter Tofu with Sriracha',
        name: 'Test User',
        start: new Date(myDate.year, myDate.month, 17)
      },
   function() {
      console.log('finished populating events');
    }
  );
});

Recipe.find({'name':'Test User'}).remove(function() {
  Recipe.create(
      {
        title: 'Stuffed Peppers with Tomato Basil Cream Sauce',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 1)],
        source: 'http://www.yummly.com/recipe/Stuffed-peppers-with-tomato-basil-cream-sauce-333479?columns=5',
        image: 'http://lh3.ggpht.com/gZuQPY8UbR8fIj33JqDF8nReaQWtVeNd_NB4OnZw2WTROgihLHVS4aYbjvAAdANitz3UZjsten065kW4GUZg1NA=s730'
      },
      {
        title: 'Steak and Scallops with Champagne-Butter Sauce',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 2)],
        source: 'http://www.yummly.com/recipe/Steak-and-scallops-with-champagne-butter-sauce-344478?columns=5',
        image: 'http://lh6.ggpht.com/WCxFHOGvqYIS8c6zOxqQMAn19Vk4_79rDWzTdQVV6ZeXpgzJ-WqXv0K4v1wD5_SlQCzcqbgtERF9wiCUHNCtJg=s230-c'
      },
      {
        title: 'Pan Seared Salmon with Avocado Remoulade',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 3)],
        source: 'http://www.yummly.com/recipe/Pan-Seared-Salmon-with-Avocado-Remoulade-Simply-Recipes-42712?columns=5',
        image: 'http://lh5.ggpht.com/Cc2dlo4nRsMJcp27oHlDIWB8anQ9gTJ-nQzJC9zRu4m3Zob8oG1pS1McaU3Sfm7uGMiUaVtKMAswyq3Br4TKmv0=s730'
      },
      {
        title: 'Parmesan Crusted Chicken',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 4)],
        source: 'http://www.yummly.com/recipe/Parmesan-crusted-chicken-350742?columns=5',
        image:'http://lh3.ggpht.com/CSDbOXNLBk4SI_RVpHGRMuBWkPE3z8lzZ8gCdlCNI7rU7HlCs825QFVu8-NL1kF9ImnyY7cDU1ijfOlU_TC8=s730'
      },
      {
        title: 'Black Bean and Guac Burritos',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 5)],
        source: 'http://www.yummly.com/recipe/Black-Bean-and-Guac-Burritos-Naturally-Ella-46521?columns=5',
        image:'http://lh3.ggpht.com/4EscPPt01l6wPVuGDMf20znz7gbon4OOb0yksNQhSix8LZhYRG0_zUGSTprfnnGzXCFDrX4sEE-znxRmJGnBLg=s230-c'
      },
      {
        title: 'Honey Garlic Chicken Slow Cooker',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 6)],
        source: 'http://www.yummly.com/recipe/Honey-garlic-chicken-slow-cooker-310273?columns=5',
        image:'http://lh5.ggpht.com/Ro7X1gjL6EiqYrf2wLEZKQQMjw-Uz2ut29XVnC40ayfZm8wvlXrFB3yBfONdKMnoE9h2ZUMKPwPGPbY9JxVXnQ=s230-c'
      },
      {
        title: 'White Wine Spaghetti with Bacon and Parmesan',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 7)],
        source: 'http://www.yummly.com/recipe/White-wine-spaghetti-with-bacon-and-parmesan-369084?columns=5',
        image:'http://lh5.ggpht.com/Ly6Pb0wZ58uTbmh-5g4b5G2dGQctPHb6bEk8kx4WzyNML9x91B6_e4euCjUE6LYU9NUhBu7qAnY9XTqbcnuKbg=s730'
      },
      {
        title: 'Chicken Breasts with Cilantro and Red Thai Curry Peanut',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 8)],
        source: 'http://www.yummly.com/recipe/Chicken-breasts-with-cilantro-and-red-thai-curry-peanut-sauce-309929?columns=5',
        image:'http://lh3.ggpht.com/WnZgaM8PgndefzkVdzN_vBVlBHXh2s3OmI3f2VNPApXJ0Pn5lRu154P_zv6okhDoemAYVQQY5qKpPDcEqyajLCA=s230-c'
      },
      {
        title: 'Easy Teriyaki Chicken',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 9)],
        source: 'http://www.yummly.com/recipe/Easy-Teriyaki-Chicken-506065?columns=5',
        image:'http://lh3.ggpht.com/s33vBFYpLCTGiRNQ6Eac9yms8EeRD6UVDJIF_3pZ4d8VldIVvNwnV2GjGafPE3tmyV_OdzxWIUF0IuidAc9jpA=s230-c'
      },
      {
        title: 'Cold Sesame Noodles with Roasted Pork',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 10)],
        source: 'http://www.yummly.com/recipe/Cold-sesame-noodles-with-roasted-pork-373251',
        image:'http://lh6.ggpht.com/l5fxtYEHWJ1CZhn2DLIWH-Xs9jqs5-vy09ocsr8m342dNTRinmG3hBclK-MvdQDA-SH_OAMtESlHIeg5wHkH=s230-c'
      },
      {
        title: 'Salsa Verde Burgers',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 11)],
        source: 'http://www.yummly.com/recipe/Salsa-Verde-Burgers-500670?columns=5',
        image:'http://lh5.ggpht.com/eXFZbV2MMM1YzZsd6xsCHhL6zb9E5J5rjVm8o22_ELf8dS2ORYdx5Wjop-t2oZYm_JIS8Jb7cWP7-YgAM_1CKA=s230-c'
      },
      {
        title: 'Penne Pasta with Spicy Italian Sausage, Mushrooms, and ',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 12)],
        source: 'http://www.yummly.com/recipe/Penne-pasta-with-spicy-italian-sausage_-mushrooms_-and-spinach-309390',
        image:'http://lh4.ggpht.com/1wNE69HJi2olJEvWE38A0p2rmJBE0PfTHsTu5gTtsgjOJpNCtRO9LxTTGxcSqPJA6nSpzveo1Q7IYZ9ZDBZm=s230-c'
      },
      {
        title: 'Sausage Pepper Skillet',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 13)],
        source: 'http://www.yummly.com/recipe/Sausage-Pepper-Skillet-TasteOfHome?columns=5',
        image:'http://lh5.ggpht.com/hJznplK71s_lNNxOuFV5MkoU7MPDvPNn0Boqyzm3yXAYWMzFzhWQmGsXuUHXQb3dcWJ8xKnIk2L2YJk5Wz-n=s230-c'
      },
      {
        title: 'Lemon Pepper Chicken & Rice',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 14)],
        source: 'http://www.yummly.com/recipe/Lemon-pepper-chicken-_-rice-297488?columns=5',
        image:'http://lh3.ggpht.com/47stk5BbrOSFMrZFYP04x6UG8hFG9C55MBhGSVE1RdmF_IFImkXHtk1TlwfgcVeACUQTHrs3lEO1PsOimDZQWw=s230-c'
      },
      {
        title: 'Broccoli Sausage Simmer',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 15)],
        source: 'http://www.yummly.com/recipe/Broccoli-Sausage-Simmer-TasteOfHome?columns=5',
        image:'http://lh5.ggpht.com/tL84xig8vcBwRN2MUL0NeRa_elMlpVHUJH9EPn4W6hSqKdQqcogB8t8_X-6g4p3mHCNkumO1UXrI1jWj7BVWbg=s230-c'
      },
      {
        title: 'Chicken with Peas and Quinoa',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 16)],
        source: 'http://www.yummly.com/recipe/Chicken-with-Peas-and-Quinoa-AllRecipes-39993?columns=5',
        image:'http://lh4.ggpht.com/YXNdwaXZXIb7vMqs3RGdssLWLn1ZqQbqPYWN8srNYrAm-DY2TheehCj2e8bQBExT2Xw8mV1ZDeoNDpNcMtjHfA=s230-c'
      },
      {
        title: 'Spicy Vegan Peanut Butter Tofu with Sriracha',
        name: 'Test User',
        scheduled: [new Date(myDate.year, myDate.month, 17)],
        source: 'http://www.yummly.com/recipe/Spicy-vegan-peanut-butter-tofu-with-sriracha-309185?columns=5',
        image:'http://lh4.ggpht.com/a32y1zI8_-QKptgB3MhUyRXSsqVN2JoE0ZkOUy5v4FMj6cyXdApgB7PtF9eO5jH7ylTdyzTCOMU6G7Q7kS3_=s230-c'
      },
   function() {
      console.log('finished populating recipes');
    }
  );
});

// Clear old users, then add a default user
User.find({'name':'Test User'}).remove(function() {
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
