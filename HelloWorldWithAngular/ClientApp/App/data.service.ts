import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = "api/helloWorld";

    constructor(private http: HttpClient) {
    }

    helloWorld() {
        return this.http.get(this.url);
    }
}