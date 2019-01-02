(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cities_cities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities/cities.component */ "./src/app/cities/cities.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _exit_exit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exit/exit.component */ "./src/app/exit/exit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'cities', component: _cities_cities_component__WEBPACK_IMPORTED_MODULE_3__["CitiesComponent"] },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"] },
    { path: 'exit', component: _exit_exit_component__WEBPACK_IMPORTED_MODULE_6__["ExitComponent"] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
    { path: '**', redirectTo: "error" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pricing-header{\r\n    background-color: rgb(255, 189, 8);\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n#ending{\r\n    background-color: rgb(46, 45, 45);\r\n    color:#fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaWNpbmctaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCA4KTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbiNlbmRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQ1LCA0NSk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"pricing-header px-1 py-1 pt-md-3 pb-md-2 mx-auto text-center\">\n        <h1 class=\"display-4\">Book MY ticket</h1>\n        <p class=\"lead\">One stop for all your movie bookings...</p>\n    </div>\n    <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n        <a class=\"navbar-brand\" href=\"#\">BookMYticket</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample02\" aria-controls=\"navbarsExample02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExample02\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink='/' active>Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink='/cities'>Cities</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink='/movies'>Movies</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>    \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cities_cities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities/cities.component */ "./src/app/cities/cities.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _exit_exit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exit/exit.component */ "./src/app/exit/exit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _cities_cities_component__WEBPACK_IMPORTED_MODULE_6__["CitiesComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_8__["MoviesComponent"],
                _exit_exit_component__WEBPACK_IMPORTED_MODULE_10__["ExitComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cities/cities.component.css":
/*!*********************************************!*\
  !*** ./src/app/cities/cities.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    color:rgb(0, 0, 0);\r\n    border-color: rgb(241, 185, 31);\r\n    border-width: 5px;\r\n}\r\nh1{\r\n    text-align: center;\r\n    color: rgb(5, 38, 80);\r\n}\r\n.card-header{\r\n    background-color: rgb(46, 45, 45);\r\n    color: rgb(255, 187, 0);\r\n}\r\n.modal-header{\r\n    background-color: rgb(46, 45, 45);\r\n    color: rgb(255, 187, 0);\r\n}\r\n.close{\r\n    color:#fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL2NpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy9jaXRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGNvbG9yOnJnYigwLCAwLCAwKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0MSwgMTg1LCAzMSk7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNSwgMzgsIDgwKTtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQ1LCA0NSk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTg3LCAwKTtcclxufVxyXG4ubW9kYWwtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0NSwgNDUpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE4NywgMCk7XHJcbn1cclxuLmNsb3Nle1xyXG4gICAgY29sb3I6I2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cities/cities.component.html":
/*!**********************************************!*\
  !*** ./src/app/cities/cities.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Select your city</h1>\n<div class=\"row mb-2\">\n    <div class=\"col-md-6\"  *ngFor=\"let city of cities;\" >\n        <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n            <div class=\"card-body d-flex flex-column align-items-start\" (click)=\"getDetails(city.name)\" data-toggle=\"modal\" data-target=\"#theaterDetails\">\n                <h3 class=\"mb-0\">{{city.name}}</h3>\n                <p class=\"card-text mb-auto\">No. of Theaters: {{city.no_of_theaters}}</p>\n                <p>{{city.pincode}}</p>   \n            </div>\n        </div>\n    </div>    \n</div>\n        \n<div class=\"modal fade\" id=\"theaterDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"theaterDetailsTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" *ngIf=TheaterDetails>\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Theaters available in {{selected_city}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\" *ngFor=\"let Theater of TheaterDetails\">\n                        <div class=\"card mb-6 box-shadow\"> \n                            <div class=\"card-header\" >\n                                <h4 class=\"my-0 font-weight-normal\">{{Theater.name}}</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <p>Now playing: {{Theater.now_playing}}</p>\n                                <p>Location: {{Theater.location}}</p>\n                                <p>Capacity: {{Theater.capacity}}</p>\n                                <p>Availability: {{Theater.Available_seats}}</p>\n                                <button type=\"button\" class=\"btn btn-primary\"  data-toggle=\"modal\" data-target=\"#movieDetails\" (click)=\"getMovieDetails(Theater.now_playing,Theater.name,Theater.cost_per_ticket,Theater.Available_seats)\" data-dismiss=\"modal\">Proceed to book</button>\n                            </div>\n                        </div><br>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"movieDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"movieDetailsTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\n        <div class=\"modal-content\" *ngIf=movieDetails>\n            <div class=\"modal-header\" >\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Details about  {{selected_movie}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <div class=\"card mb-8 box-shadow\"> \n                            <div class=\"card-header\">\n                                <h4 class=\"my-0 font-weight-normal\">{{movieDetails.name}}</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col\">\n                                        <p>Music : {{movieDetails.Music}}</p>\n                                        <p>Producer :{{movieDetails.Producer}}</p>\n                                        <p>Director :{{movieDetails.Director}}</p>\n                                        <p>Release Date :{{movieDetails.Release_date}}</p>\n                                        <p>Ratings :{{movieDetails.Ratings}}</p>\n                                    </div>\n                                    <div class=\"col\">\n                                        <p>select Date: <input type=\"date\" [(ngModel)]=\"date\"></p>\n                                        <p>show timings:</p>\n                                        <input type=\"radio\" name=\"show_time\" value=\"11:30 am\" (change)=\"showTime($event)\">11:30 am\n                                        <input type=\"radio\" name=\"show_time\" value=\"2:30 pm\" (change)=\"showTime($event)\">2:30 pm\n                                        <input type=\"radio\" name=\"show_time\" value=\"6:30 pm\" (change)=\"showTime($event)\">6:30 pm\n                                        <input type=\"radio\" name=\"show_time\" value=\"10:00 pm\" (change)=\"showTime($event)\">10:00 pm\n                                    </div>\n                                </div>   \n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=proceed data-toggle=\"modal\" data-target=\"#selectSeats\" data-dismiss=\"modal\">Book tickets</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"selectSeats\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"selectSeatsTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" >\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Pick no of Tickets</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card mb-4 box-shadow\"> \n                            <div class=\"card-header\">\n                                <h4 class=\"my-0 font-weight-normal\">Select the no of tickets you want to book</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <input type=\"radio\" name=\"no_of_tickets\" value=1 (change)=\"radioChangeHandler($event)\">1\n                                <input type=\"radio\" name=\"no_of_tickets\" value=2 (change)=\"radioChangeHandler($event)\">2\n                                <input type=\"radio\" name=\"no_of_tickets\" value=3 (change)=\"radioChangeHandler($event)\">3\n                                <input type=\"radio\" name=\"no_of_tickets\" value=4 (change)=\"radioChangeHandler($event)\">4\n                                <input type=\"radio\" name=\"no_of_tickets\" value=5 (change)=\"radioChangeHandler($event)\">5\n                                <input type=\"radio\" name=\"no_of_tickets\" value=6 (change)=\"radioChangeHandler($event)\">6\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=proceed2  data-toggle=\"modal\" data-target=\"#bookingDetails\" data-dismiss=\"modal\">Proceed to Payment</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"bookingDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"bookingDetailsTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" >\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Payment Gateway</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <div class=\"card mb-8 box-shadow\"> \n                            <div class=\"card-header\">\n                                <h4 class=\"my-0 font-weight-normal\">Booking Details</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" required>\n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter email\" required>\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phone\" placeholder=\"Enter Mobile Number\" required>\n                                <p>No.of seats selected :{{tickets}}</p>\n                                <p>Total cost :{{tickets*cost_per_ticket}}</p>\n                                <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"onBooking()\" data-dismiss=\"modal\"  data-toggle=\"modal\" data-target=\"#ticketDetails\">Pay</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"ticketDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ticketDetailsTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" >\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Verify your ticket Details</h5>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\" *ngIf=ticketDetails>\n                        <div class=\"card mb-8 box-shadow\"> \n                            <div class=\"card-header\">\n                                <h4 class=\"my-0 font-weight-normal\">Ticket Details</h4>\n                            </div>\n                            <div class=\"card-body\" >\n                                <div class=\"row\">\n                                    <div class=\"col-md-8\">\n                                        <p>Ticket id :{{ticketDetails._id}}</p>\n                                        <p>Username :{{ticketDetails.username}}</p>\n                                        <p>Email :{{ticketDetails.email}}</p>\n                                        <p>Phone :{{ticketDetails.phone}}</p>\n                                        <p>Movie Name :{{ticketDetails.movie_name}}</p>\n                                        <p>Theater Name :{{ticketDetails.Theater_name}}</p>\n                                        <p>Show date :{{ticketDetails.show_date}} </p>\n                                        <p>Show Time :{{ticketDetails.show_time}}</p>\n                                        <p>No of Tickets :{{ticketDetails.No_of_tickets}}</p>\n                                    </div>\n                                    <img src=\"../../assets/booking_confirm-symbol.png\" alt=\"confirmed\" width=\"100\" height=\"100\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClose()\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cities/cities.component.ts":
/*!********************************************!*\
  !*** ./src/app/cities/cities.component.ts ***!
  \********************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CitiesComponent = /** @class */ (function () {
    function CitiesComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.proceed = true; //used to disable the button
        this.proceed2 = true; //used to disable to button
    }
    CitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCities().subscribe(function (res) {
            _this.cities = res.data;
            console.log(_this.cities);
        });
    };
    CitiesComponent.prototype.getDetails = function (city) {
        var _this = this;
        this.selected_city = city;
        this.dataService.bookingDetails.city = city;
        this.dataService.getTheaters("/theaters?city=" + city).subscribe(function (res) {
            _this.TheaterDetails = res.data;
            console.log(_this.TheaterDetails);
        });
    };
    CitiesComponent.prototype.getMovieDetails = function (movieName, theater, cost, seats) {
        var _this = this;
        this.cost_per_ticket = cost;
        this.selected_movie = movieName;
        this.selected_theater = theater;
        this.dataService.bookingDetails.movie_name = movieName;
        this.dataService.bookingDetails.Theater_name = theater;
        this.Available_seats = seats;
        this.dataService.getTheaters("/movies?name=" + movieName).subscribe(function (res) {
            _this.movieDetails = res.data[0];
            console.log(_this.movieDetails);
            console.log(_this.movieDetails.name);
            console.log(_this.cost_per_ticket);
        });
    };
    CitiesComponent.prototype.radioChangeHandler = function (event) {
        this.tickets = event.target.value;
        console.log(this.tickets);
        this.dataService.bookingDetails.No_of_tickets = this.tickets;
        this.proceed2 = false;
    };
    CitiesComponent.prototype.showTime = function (event) {
        this.show_time = event.target.value;
        console.log(this.show_time);
        this.dataService.bookingDetails.show_time = this.show_time;
        this.proceed = false;
    };
    CitiesComponent.prototype.onBooking = function () {
        var _this = this;
        this.Total_Amount = this.cost_per_ticket * this.tickets;
        this.dataService.bookingDetails.username = this.username;
        this.dataService.bookingDetails.email = this.email;
        this.dataService.bookingDetails.phone = this.phone;
        this.dataService.bookingDetails.Amount_paid = this.Total_Amount;
        this.dataService.bookingDetails.show_date = this.date;
        this.dataService.onBook(this.dataService.bookingDetails).subscribe(function (res) {
            _this.ticketDetails = res;
            console.log(res);
        });
        this.dataService.makeChanges.Theater_name = this.dataService.bookingDetails.Theater_name;
        this.dataService.makeChanges.available = this.Available_seats - this.dataService.bookingDetails.No_of_tickets;
        console.log(this.dataService.makeChanges.available);
        alert("Successfully booked your ticket(s)");
    };
    CitiesComponent.prototype.onClose = function () {
        var _this = this;
        this.dataService.blockSeats(this.dataService.makeChanges).subscribe(function (res) {
            console.log(res);
        });
        setTimeout(function () {
            _this.router.navigate(['/exit']);
        }, 1000);
    };
    CitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities',
            template: __webpack_require__(/*! ./cities.component.html */ "./src/app/cities/cities.component.html"),
            styles: [__webpack_require__(/*! ./cities.component.css */ "./src/app/cities/cities.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CitiesComponent);
    return CitiesComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.bookingDetails = {
            username: "",
            email: "",
            phone: 0,
            movie_name: "",
            show_date: 1 / 1 / 2019,
            show_time: "",
            No_of_tickets: 0,
            Amount_paid: 0,
            Theater_name: "",
            city: ""
        };
        this.makeChanges = {
            available: 0,
            Theater_name: ""
        };
    }
    DataService.prototype.getCities = function () {
        return this.http.get("/cities");
    };
    DataService.prototype.getTheaters = function (url) {
        return this.http.get(url);
    };
    DataService.prototype.getMovie = function (url) {
        return this.http.get(url);
    };
    DataService.prototype.onBook = function (booking) {
        return this.http.post("/book", booking);
    };
    DataService.prototype.getTicket = function () {
        return this.http.get("/ticket");
    };
    DataService.prototype.blockSeats = function (makeChanges) {
        return this.http.put("/blockseats", makeChanges);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    color: rgb(10, 86, 129);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDEwLCA4NiwgMTI5KTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-3\">Page not found</h1>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/exit/exit.component.css":
/*!*****************************************!*\
  !*** ./src/app/exit/exit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    color:rgb(8, 77, 122);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhpdC9leGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZXhpdC9leGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJnYig4LCA3NywgMTIyKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/exit/exit.component.html":
/*!******************************************!*\
  !*** ./src/app/exit/exit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Thank you for booking your movie tickets</h1>\n            <h1 class=\"display=3\">Enjoy your Movie ...</h1>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/exit/exit.component.ts":
/*!****************************************!*\
  !*** ./src/app/exit/exit.component.ts ***!
  \****************************************/
/*! exports provided: ExitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitComponent", function() { return ExitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExitComponent = /** @class */ (function () {
    function ExitComponent(router) {
        this.router = router;
    }
    ExitComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log("redirectd to Home page");
            _this.router.navigate(["/"]);
        }, 3000);
    };
    ExitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exit',
            template: __webpack_require__(/*! ./exit.component.html */ "./src/app/exit/exit.component.html"),
            styles: [__webpack_require__(/*! ./exit.component.css */ "./src/app/exit/exit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ExitComponent);
    return ExitComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,h6{\r\n    text-align:center;\r\n}\r\n#carouselExampleIndicators{\r\n    width: 100%;\r\n    height:350px;\r\n    align-content: center;\r\n    align-items: center;\r\n}\r\nimg{\r\n    height:350px;\r\n    background-position: center;\r\n    align-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLGg2e1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDozNTBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col\">\r\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img src=\"../../assets/Attarintiki-Daaredi.jpg\" class=\"d-block w-100\" alt=\"Attarintiki Dharedhi\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"../../assets/srimanthudu.jpg\" class=\"d-block w-100\" alt=\"Srimanthudu\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img src=\"../../assets/bahubali.jpg\" class=\"d-block w-100\" alt=\"Bahubali\">\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n    <div class=\"col-4\">\r\n        <h3>Trending Movies</h3>\r\n        <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\r\n            <a class=\"list-group-item list-group-item-action active\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-home\" role=\"tab\">Attarintiki Daredi</a>\r\n            <a class=\"list-group-item list-group-item-action\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-profile\" role=\"tab\">Srimanthudu</a>\r\n            <a class=\"list-group-item list-group-item-action\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-messages\" role=\"tab\">Bahubali</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-8\">\r\n        <div class=\"tab-content\" id=\"nav-tabContent\">\r\n            <div class=\"tab-pane fade show active\" id=\"list-home\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\r\n                <p>Attarintiki Daredi is a 2013 Indian Telugu-language comedy-drama film written and directed by Trivikram Srinivas. It stars Pawan Kalyan, Samantha Akkineni and Pranitha Subhash in the lead roles with Nadhiya, Boman Irani and Brahmanandam in supporting roles.<br>The film focuses on Gautham Nanda, a business heir who acts as a driver in his estranged aunt Sunanda's house to mend her strained relationship with his grandfather Raghunandan who expelled her for marrying against his wishes years before.</p>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"list-profile\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\r\n                <p>Srimanthudu (English: The Wealthy Man) is a 2015 Indian Telugu-language action film written and directed by Koratala Siva. It was produced by Y. Naveen, Y. Ravi Shankar and C. V. Mohan under their banner Mythri Movie Makers. Mahesh Babu co-produced the film under his banner G. Mahesh Babu Entertainment Pvt. Ltd<br>The film tells the story of Harsha Vardhan, a young man who inherits a business empire from his father Ravikanth (played by Jagapati Babu). Urged by his friend Charuseela to learn about his and his father's ancestral roots in a remote village named Devarakota, Harsha adopts the village and spends some time trying to improve the standard of living of the local people and the infrastructure of the village. His efforts anger the local crime boss Sashi (played by Sampath Raj) and his brother Venkata Ratnam, a politician (played by Mukesh Rishi).</p>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"list-messages\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\r\n                <p>Baahubali: The Beginning is a 2015 Indian epic action film directed by S. S. Rajamouli. The film was produced by Shobu Yarlagadda and Prasad Devineni and was shot in both Telugu and Tamil. This film was also dubbed into Malayalam and Hindi. The film stars Prabhas, Rana Daggubati, Anushka Shetty, and Tamannaah in the lead roles, with Ramya Krishnan, Sathyaraj, and Nassar in supporting roles. <br>The first of two cinematic parts, the film follows Sivudu, an adventurous young man who helps his love, a rebellious warrior intending to rescue the former queen of Mahishmati. In the process, he learns of his true identity as the heir to the throne of Mahishmati, the son of Amarendra Baahubali, whose tale is narrated to him by Kattappa, a loyal warrior. When asked about Amarendra's whereabouts, Kattappa reveals that he was the one who killed him. The reason behind this is explained in the follow-up Baahubali 2: The Conclusion.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    color:rgb(0, 0, 0);\r\n    border-color: rgb(241, 185, 31);\r\n    border-width: 3px;\r\n}\r\nh1{\r\n    text-align: center;\r\n    color:rgb(7, 53, 114);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDEsIDE4NSwgMzEpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoNywgNTMsIDExNCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Movies currently playing in Theaters</h1>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n            <div class=\"card-body\">\n                <strong class=\"d-inline-block mb-2 text-primary\">Attarintiki Daredhi</strong>\n                <p>cast:</p>\n                <p>PawanKalyan,Samantha,Nadiya</p>\n                <p>Music director: DSP</p>\n                <p>Director: Trivikram Srinivas</p>\n            </div>\n            <img src=\"../../assets/Attarintiki-Daaredi-movie-img.jpg\" alt=\"image\"  width=\"200\" height=\"250\">\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n            <div class=\"card-body\">\n                <strong class=\"d-inline-block mb-2 text-primary\">Srimanthudu</strong>\n                <p>cast:</p>\n                <p>Maheshbabu,Sruthi hasan,Jagapathibabu</p>\n                <p>Music director: DSP</p>\n                <p>Director: Koratala Siva</p>\n            </div>\n            <img src=\"../../assets/srimanthudu-movie-img.jpg\" alt=\"srimanthudu\"  width=\"200\" height=\"250\">\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n            <div class=\"card-body\">\n                <strong class=\"d-inline-block mb-2 text-primary\">Bahubali</strong>\n                <p>cast:</p>\n                <p>Prabhas,Anushka,Rana</p>\n                <p>Music director: M.M.Keeravani</p>\n                <p>Director: S.S.Rajamouli</p>\n            </div>\n            <img src=\"../../assets/bahubali-movie-img.jpg\" alt=\"image\"  width=\"200\" height=\"250\">\n        </div>\n    </div>\n</div>\n<h1>Coming soon in your Theaters</h1>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n            <div class=\"card-body\">\n                <strong class=\"d-inline-block mb-2 text-primary\">Vinaya Vidheya Rama</strong>\n                <p>Ram Charan,Kiara Advani,Vivek Oberoi</p>\n                <p>Music director: DSP</p>\n                <p>Director: Boyapati Srinu</p>\n                <p>Release Date:11 JAN 2019</p>\n            </div>\n            <img src=\"../../assets/vvr-movie-img.jpg\" alt=\"image\"  width=\"200\" height=\"250\">\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n            <div class=\"card-body\">\n                <strong class=\"d-inline-block mb-2 text-primary\">Maharshi</strong>\n                <p>Maheshbabu,Pooja hedge</p>\n                <p>Music director: DSP</p>\n                <p>Director: Vamshi Paidipally</p>\n                <p>Release Date: April 2019</p>\n            </div>\n            <img src=\"../../assets/Maharshi-movie-img.jpg\" alt=\"image\"  width=\"200\" height=\"250\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoviesComponent = /** @class */ (function () {
    function MoviesComponent() {
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular  WorkSpot\mean\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map