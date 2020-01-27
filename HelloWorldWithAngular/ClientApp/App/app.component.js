var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HelloService } from './HelloService';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, serverDataService) {
        this.dataService = dataService;
        this.serverDataService = serverDataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadProducts(); // загрузка данных при старте компонента  
    };
    // получаем данные через сервис
    AppComponent.prototype.loadProducts = function () {
        var _this = this;
        this.dataService.helloWorld()
            .subscribe(function (data) { return _this.helloFromController = data; });
        this.serverDataService.helloWorldFromServer()
            .subscribe(function (data) { return _this.helloFromApiController = data; });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            providers: [DataService, HelloService]
        }),
        __metadata("design:paramtypes", [DataService, HelloService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map