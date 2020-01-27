import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class HelloService {

    private url = "https://localhost:44366/hello";

    constructor(private http: HttpClient) {
    }

    helloWorldFromServer() {
        return this.http.get(this.url);
    }
}