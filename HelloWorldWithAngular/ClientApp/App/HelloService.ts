import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HelloService {

    private url = "hello";

    constructor(private http: HttpClient) {
    }

    helloWorld() {
        return this.http.get(this.url);
    }
}