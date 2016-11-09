"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<router-outlet></router-outlet>',
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppComponent1 = (function () {
    function AppComponent1(router) {
        this.router = router;
    }
    AppComponent1.prototype.nav2 = function () {
        this.router.navigate(['/myapp2']);
    };
    AppComponent1 = __decorate([
        core_1.Component({
            selector: 'my-app1',
            template: "<h1>Hello Angular2!</h1>\n  <a routerLink=\"/myapp2\" routerLinkActive=\"active\">Crisis Center</a>\n  <input type=button (click)=nav2()/>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent1);
    return AppComponent1;
}());
exports.AppComponent1 = AppComponent1;
var AppComponent2 = (function () {
    function AppComponent2(HeroServ) {
        this.HeroServ = HeroServ;
    }
    AppComponent2.prototype.msg = function (name) {
        alert(name);
    };
    AppComponent2.prototype.ngOnInit = function () {
        this.heroes = this.HeroServ.getHeroes();
    };
    AppComponent2 = __decorate([
        core_1.Component({
            selector: 'my-app2',
            template: "<h1>Hello Angular3!</h1>\n  <table>\n  <tr *ngFor=\"let hero of heroes\"  ><td [innerText]=hero.name (click)=\"msg(hero.name)\" >{{hero.name}}</td></tr></table>\n  "
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent2);
    return AppComponent2;
}());
exports.AppComponent2 = AppComponent2;
//# sourceMappingURL=app.component.js.map