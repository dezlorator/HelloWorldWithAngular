import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HelloService } from './HelloService';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService, HelloService]
})
export class AppComponent implements OnInit {

    helloFromController: string[];               
    helloFromApiController: string[];
    constructor(private dataService: DataService, private serverDataService: HelloService)
    { }

    ngOnInit() {
        this.loadProducts();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadProducts() {
        this.dataService.helloWorld()
            .subscribe((data: string[]) => this.helloFromController = data);
        this.serverDataService.helloWorld()
            .subscribe((data: string[]) => this.helloFromApiController = data);
    }

}