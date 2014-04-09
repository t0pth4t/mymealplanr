(function(){"use strict";angular.module("mymealplanrApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.calendar","ui.bootstrap"]).config(["$routeProvider","$locationProvider","$httpProvider",function(a,b,c){return a.when("/",{templateUrl:"partials/main",controller:"MainCtrl"}).when("/login",{templateUrl:"partials/login",controller:"LoginCtrl"}).when("/signup",{templateUrl:"partials/signup",controller:"SignupCtrl"}).when("/settings",{templateUrl:"partials/settings",controller:"SettingsCtrl",authenticate:!0}).when("/about",{templateUrl:"partials/about"}).otherwise({redirectTo:"/"}),b.html5Mode(!0),c.interceptors.push(["$q","$location",function(a,b){return{responseError:function(c){return 401===c.status?(b.path("/login"),a.reject(c)):a.reject(c)}}}])}]).run(["$rootScope","$location","Auth",function(a,b,c){return a.$on("$routeChangeStart",function(a,d){return d.authenticate&&!c.isLoggedIn()?b.path("/login"):void 0})}])}).call(this),function(){"use strict";angular.module("mymealplanrApp").controller("MainCtrl",["$scope","$http","Recipe","Event","Auth",function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;a.eventSources=[],a.dateOptions={"year-format":"'yy'","starting-day":1},e.isLoggedIn()?(n=c.get({name:a.currentUser.name}),i=d.get({name:a.currentUser.name})):(n=c.get({name:"Test User"}),i=d.get({name:"Test User"})),n.$promise.then(function(){var b,c,d,f;if(a.recipes=n.recipes,!e.isLoggedIn()){for(a.events=m(a.recipes),f=a.events,c=0,d=f.length;d>c;c++)b=f[c],k(b);a.eventSources.push(a.events)}}),i.$promise.then(function(){return e.isLoggedIn()?(i.events.forEach(function(a){a.backgroundColor="#2C343B",a.borderColor="#7c7c7c",k(a)}),a.events=i.events,a.eventSources.push(a.events)):void 0}),a.uiConfig={calendar:{editable:!0,droppable:!0,eventRender:function(a,b){var c,d;return d=j(a.title),null!=d&&(c="<a href='"+d.source+"' target='_blank'><img width='200px' height='200px' src='"+d.image+"'/></a>"),b.popover({title:a.title,placement:"bottom",html:!0,content:c,container:"body"})},eventDrop:function(b,c){var f;f=new Date(b.start.getFullYear(),b.start.getMonth(),b.start.getDate()-c),e.isLoggedIn()&&d.update({oldDate:f,newDate:b.start,name:a.currentUser.name}),a.$apply(function(){e.isLoggedIn()||(a.alertMessage="Create an accout or login to save changes!")})},drop:function(b){var c,d,h,i;h=$(this).children().attr("href"),i=$(this).children().text(),d=j(i),c=g($.trim(i),b,h),a.$apply(function(){f(c),e.isLoggedIn()||(a.alertMessage="Create an accout or login to save changes!")})}}},j=function(b){var c;if(a.recipes)return function(){var d,e,f,g;for(f=a.recipes,g=[],d=0,e=f.length;e>d;d++)c=f[d],c.title===b&&g.push(c);return g}()[0]||null},g=function(a,b,c){return b?{title:a,start:new Date(b),link:c,backgroundColor:"#2C343B",borderColor:"#7c7c7c"}:void 0},o=function(b){return a.$apply(function(){return a.events.splice(a.events.indexOf(b),1)})},h=function(b){b.scheduled.forEach(function(c){var d;return d=g(b.title,c,b.source),a.events.push(d)})},a.createRecipe=function(b,h,i,j){var k,l;j&&(j=new Date(j)),k=g(b,j,h),f(k),angular.element("#myModal").modal("hide"),l={title:b,image:i,source:h},j&&(l.scheduled=[j]),e.isLoggedIn()&&(l.name=a.currentUser.name,c.save(l),k&&(k.name=a.currentUser.name,d.save(k)))},f=function(b){var c,d,e;if(b){for(void 0===a.events&&(a.events=[]),d=-1,e=0;e<a.events.length;){if(c=a.events[e].start,c.getMonth()===b.start.getMonth()&&c.getDate()===b.start.getDate()&&c.getFullYear()===b.start.getFullYear()){d=e;break}e++}return-1!==d?a.events[d]=b:a.events.push(b),b}},l=function(a){var b;return b=a.getDay(),6===b||0===b},k=function(a){var b;a&&(a.start.getMonth||(a.start=new Date(a.start)),b=a.start.getDay(),(6===b||0===b)&&(a.backgroundColor="#C44741"),0===b&&(a.title="Free Day"))},m=function(a){var b,c,d,e,f,h;for(i=[],b=new Date,e=new Date(b.getFullYear(),b.getMonth()+1,0).getDate(),d=1;e+1>d;)f=Math.floor(Math.random()*a.length),h=a[f],c=g(h.title,new Date(b.getFullYear(),b.getMonth(),d),h.source),i.push(c),++d;return p(i)},p=function(a){var b,c,d;for(c=a.length,d=void 0,b=void 0;c;)b=Math.floor(Math.random()*c--),d=a[c],a[c]=a[b],a[b]=d;return a},a.open=function(b){return b.preventDefault(),b.stopPropagation(),a.opened=!0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("NavbarCtrl",["$scope","$location","Auth",function(a,b,c){return a.menu=[{title:"Home",link:"/"},{title:"About",link:"/about"}],a.logout=function(){return c.logout().then(function(){return b.path("/login")})},a.isActive=function(a){return a===b.path()}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("LoginCtrl",["$scope","Auth","$location",function(a,b,c){return a.user={},a.errors={},a.login=function(d){return a.submitted=!0,d.$valid?b.login({email:a.user.email,password:a.user.password}).then(function(){return c.path("/")})["catch"](function(b){return b=b.data,a.errors.other=b.message}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("SignupCtrl",["$scope","Auth","$location",function(a,b,c){return a.user={},a.errors={},a.register=function(d){return a.submitted=!0,d.$valid?b.createUser({name:a.user.name,email:a.user.email,password:a.user.password}).then(function(){return c.path("/")})["catch"](function(b){return b=b.data,a.errors={},angular.forEach(b.errors,function(b,c){return d[c].$setValidity("mongoose",!1),a.errors[c]=b.type})}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("SettingsCtrl",["$scope","User","Auth",function(a,b,c){return a.errors={},a.changePassword=function(b){return a.submitted=!0,b.$valid?c.changePassword(a.user.oldPassword,a.user.newPassword).then(function(){return a.message="Password successfully changed."})["catch"](function(){return b.password.$setValidity("mongoose",!1),a.errors.other="Incorrect password"}):void 0}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Auth",["$location","$rootScope","Session","User","$cookieStore",function(a,b,c,d,e){return b.currentUser=e.get("user")||null,e.remove("user"),{login:function(a,d){var e;return e=d||angular.noop,c.save({email:a.email,password:a.password},function(a){return b.currentUser=a,e()},function(a){return e(a)}).$promise},logout:function(a){var d;return d=a||angular.noop,c["delete"](function(){return b.currentUser=null,d()},function(a){return d(a)}).$promise},createUser:function(a,c){var e;return e=c||angular.noop,d.save(a,function(a){return b.currentUser=a,e(a)},function(a){return e(a)}).$promise},changePassword:function(a,b,c){var e;return e=c||angular.noop,d.update({oldPassword:a,newPassword:b},function(a){return e(a)},function(a){return e(a)}).$promise},currentUser:function(){return d.get()},isLoggedIn:function(){var a;return a=b.currentUser,!!a}}}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Session",["$resource",function(a){return a("/api/session/")}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("User",["$resource",function(a){return a("/api/users/:id",{id:"@id"},{update:{method:"PUT",params:{}},get:{method:"GET",params:{id:"me"}}})}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").directive("mongooseError",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){return b.on("keydown",function(){return d.$setValidity("mongoose",!0)})}}})}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Recipe",["$resource",function(a){return a("/api/recipe")}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").factory("Event",["$resource",function(a){return a("/api/event",{},{update:{method:"PUT",params:{}}})}])}.call(this),function(){"use strict";angular.module("mymealplanrApp").directive("makedraggable",function(){return{restrict:"A",link:function(a,b){return b.draggable({zIndex:999,revert:!0,revertDuration:0})}}})}.call(this),function(){"use strict";angular.module("mymealplanrApp").controller("RecipemodalCtrl",["$scope","$http","$modalInstance",function(a,b,c){return a.close=function(a){c.close(a)}}])}.call(this);