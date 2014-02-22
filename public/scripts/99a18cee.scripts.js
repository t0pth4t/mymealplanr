(function(){"use strict";angular.module("mymealplanrApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.calendar"]).config(["$routeProvider","$locationProvider","$httpProvider",function(a,b,c){return a.when("/",{templateUrl:"partials/main",controller:"MainCtrl"}).when("/login",{templateUrl:"partials/login",controller:"LoginCtrl"}).when("/signup",{templateUrl:"partials/signup",controller:"SignupCtrl"}).when("/settings",{templateUrl:"partials/settings",controller:"SettingsCtrl",authenticate:!0}).otherwise({redirectTo:"/"}),b.html5Mode(!0),c.interceptors.push(["$q","$location",function(a,b){return{responseError:function(c){return 401===c.status?(b.path("/login"),a.reject(c)):a.reject(c)}}}])}]).run(["$rootScope","$location","Auth",function(a,b,c){return a.$on("$routeChangeStart",function(a,d){return d.authenticate&&!c.isLoggedIn()?b.path("/login"):void 0})}])}).call(this),function(){"use strict";angular.module("mymealplanrApp").controller("MainCtrl",["$scope","$http",function(a,b){var c,d,e,f;d=new Date,c=d.getDate(),e=d.getMonth(),f=d.getFullYear(),a.events=[{title:"All Day Event",start:new Date(f,e,1)},{title:"Long Event",start:new Date(f,e,c-5),end:new Date(f,e,c-2)},{id:999,title:"Repeating Event",start:new Date(f,e,c-3,16,0),allDay:!1},{id:999,title:"Repeating Event",start:new Date(f,e,c+4,16,0),allDay:!1},{title:"Birthday Party",start:new Date(f,e,c+1,19,0),end:new Date(f,e,c+1,22,30),allDay:!1},{title:"Click for Google",start:new Date(f,e,28),end:new Date(f,e,29),url:"http://google.com/"}],a.addEvent=function(b,c,d){a.events.push({title:b,start:c,end:d,className:["openSesame"]})},a.eventSources=[a.events],b.get("/api/awesomeThings").success(function(b){a.awesomeThings=b})}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("NavbarCtrl",["$scope","$location","Auth",function(a,b,c){return a.menu=[{title:"Home",link:"/"},{title:"Settings",link:"/settings"}],a.logout=function(){return c.logout().then(function(){return b.path("/login")})},a.isActive=function(a){return a===b.path()}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("LoginCtrl",["$scope","Auth","$location",function(a,b,c){return a.user={},a.errors={},a.login=function(d){return a.submitted=!0,d.$valid?b.login({email:a.user.email,password:a.user.password}).then(function(){return c.path("/")})["catch"](function(b){return b=b.data,a.errors.other=b.message}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("SignupCtrl",["$scope","Auth","$location",function(a,b,c){return a.user={},a.errors={},a.register=function(d){return a.submitted=!0,d.$valid?b.createUser({name:a.user.name,email:a.user.email,password:a.user.password}).then(function(){return c.path("/")})["catch"](function(b){return b=b.data,a.errors={},angular.forEach(b.errors,function(b,c){return d[c].$setValidity("mongoose",!1),a.errors[c]=b.type})}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("SettingsCtrl",["$scope","User","Auth",function(a,b,c){return a.errors={},a.changePassword=function(b){return a.submitted=!0,b.$valid?c.changePassword(a.user.oldPassword,a.user.newPassword).then(function(){return a.message="Password successfully changed."})["catch"](function(){return b.password.$setValidity("mongoose",!1),a.errors.other="Incorrect password"}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Auth",["$location","$rootScope","Session","User","$cookieStore",function(a,b,c,d,e){return b.currentUser=e.get("user")||null,e.remove("user"),{login:function(a,d){var e;return e=d||angular.noop,c.save({email:a.email,password:a.password},function(a){return b.currentUser=a,e()},function(a){return e(a)}).$promise},logout:function(a){var d;return d=a||angular.noop,c["delete"](function(){return b.currentUser=null,d()},function(a){return d(a)}).$promise},createUser:function(a,c){var e;return e=c||angular.noop,d.save(a,function(a){return b.currentUser=a,e(a)},function(a){return e(a)}).$promise},changePassword:function(a,b,c){var e;return e=c||angular.noop,d.update({oldPassword:a,newPassword:b},function(a){return e(a)},function(a){return e(a)}).$promise},currentUser:function(){return d.get()},isLoggedIn:function(){var a;return a=b.currentUser,!!a}}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Session",["$resource",function(a){return a("/api/session/")}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("User",["$resource",function(a){return a("/api/users/:id",{id:"@id"},{update:{method:"PUT",params:{}},get:{method:"GET",params:{id:"me"}}})}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").directive("mongooseError",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){return b.on("keydown",function(){return d.$setValidity("mongoose",!0)})}}})}.call(this);