(function(){"use strict";angular.module("mymealplanrApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.calendar"]).config(["$routeProvider","$locationProvider","$httpProvider",function(a,b,c){return a.when("/",{templateUrl:"partials/main",controller:"MainCtrl"}).when("/login",{templateUrl:"partials/login",controller:"LoginCtrl"}).when("/signup",{templateUrl:"partials/signup",controller:"SignupCtrl"}).when("/settings",{templateUrl:"partials/settings",controller:"SettingsCtrl",authenticate:!0}).otherwise({redirectTo:"/"}),b.html5Mode(!0),c.interceptors.push(["$q","$location",function(a,b){return{responseError:function(c){return 401===c.status?(b.path("/login"),a.reject(c)):a.reject(c)}}}])}]).run(["$rootScope","$location","Auth",function(a,b,c){return a.$on("$routeChangeStart",function(a,d){return d.authenticate&&!c.isLoggedIn()?b.path("/login"):void 0})}])}).call(this),function(){"use strict";angular.module("mymealplanrApp").controller("MainCtrl",["$scope","$http",function(a,b){var c;a.events=[],b.get("/api/events").success(function(b){a.events=b,a.eventSources.push(a.events)}),a.alertOnDrop=function(b,c){a.$apply(function(){a.alertMessage="Event dropped days changed "+c})},a.addEvent=function(b,c,d){var e,f,g;for(d=new Date(d),f=-1,g=0;g<a.events.length;){if(e=a.events[g].start,e.getMonth()===d.getMonth()&&e.getDate()===d.getDate()&&d.getFullYear()===e.getFullYear()){f=g;break}g++}-1!==f?a.events[f]={title:b,start:d,end:d,url:c}:a.events.push({title:b,start:d,end:d,url:c})},a.uiConfig={calendar:{editable:!0,droppable:!0,eventDrop:a.alertOnDrop}},a.eventSources=[a.events],b.get("/api/awesomeThings").success(function(b){a.awesomeThings=b,a.events=c(b),a.eventSources.push(a.events)}),c=function(a){var b,c,d,e,f,g;for(c=[],b=new Date,e=new Date(b.getFullYear(),b.getMonth()+1,0).getDate(),d=1;e+1>d;)f=Math.floor(Math.random()*a.length),g=a[f],c.push({title:g.title,start:new Date(b.getFullYear(),b.getMonth(),d),end:new Date(b.getFullYear(),b.getMonth(),d),url:g.url}),++d;return c}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("NavbarCtrl",["$scope","$location","Auth",function(a,b,c){return a.menu=[{title:"Home",link:"/"},{title:"Settings",link:"/settings"}],a.logout=function(){return c.logout().then(function(){return b.path("/login")})},a.isActive=function(a){return a===b.path()}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("LoginCtrl",["$scope","Auth","$location",function(a,b,c){return a.user={},a.errors={},a.login=function(d){return a.submitted=!0,d.$valid?b.login({email:a.user.email,password:a.user.password}).then(function(){return c.path("/")})["catch"](function(b){return b=b.data,a.errors.other=b.message}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("SignupCtrl",["$scope","Auth","$location",function(a,b,c){return a.user={},a.errors={},a.register=function(d){return a.submitted=!0,d.$valid?b.createUser({name:a.user.name,email:a.user.email,password:a.user.password}).then(function(){return c.path("/")})["catch"](function(b){return b=b.data,a.errors={},angular.forEach(b.errors,function(b,c){return d[c].$setValidity("mongoose",!1),a.errors[c]=b.type})}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("SettingsCtrl",["$scope","User","Auth",function(a,b,c){return a.errors={},a.changePassword=function(b){return a.submitted=!0,b.$valid?c.changePassword(a.user.oldPassword,a.user.newPassword).then(function(){return a.message="Password successfully changed."})["catch"](function(){return b.password.$setValidity("mongoose",!1),a.errors.other="Incorrect password"}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Auth",["$location","$rootScope","Session","User","$cookieStore",function(a,b,c,d,e){return b.currentUser=e.get("user")||null,e.remove("user"),{login:function(a,d){var e;return e=d||angular.noop,c.save({email:a.email,password:a.password},function(a){return b.currentUser=a,e()},function(a){return e(a)}).$promise},logout:function(a){var d;return d=a||angular.noop,c["delete"](function(){return b.currentUser=null,d()},function(a){return d(a)}).$promise},createUser:function(a,c){var e;return e=c||angular.noop,d.save(a,function(a){return b.currentUser=a,e(a)},function(a){return e(a)}).$promise},changePassword:function(a,b,c){var e;return e=c||angular.noop,d.update({oldPassword:a,newPassword:b},function(a){return e(a)},function(a){return e(a)}).$promise},currentUser:function(){return d.get()},isLoggedIn:function(){var a;return a=b.currentUser,!!a}}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Session",["$resource",function(a){return a("/api/session/")}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("User",["$resource",function(a){return a("/api/users/:id",{id:"@id"},{update:{method:"PUT",params:{}},get:{method:"GET",params:{id:"me"}}})}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").directive("mongooseError",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){return b.on("keydown",function(){return d.$setValidity("mongoose",!0)})}}})}.call(this);