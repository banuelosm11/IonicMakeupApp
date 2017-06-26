import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService{
    urlforSpring = 'http://localhost:4040';
    
    constructor(private _http:Http){

    }

    getAllProducts() : Observable<any> {
        return this._http.get("http://localhost:4040/products/getAll")
        .map(response => response.json());
    }

    getProductDetails(id:any) : Observable<any> {
        return this._http.get(`${this.urlforSpring}/products/${id}`)
        .map(response => response.json());
    }

    putProductEdits(json:any): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(`${this.urlforSpring}/products/put`, json, { headers: headers });
    }

    postProduct(json:any): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(`${this.urlforSpring}/products/post`, json, { headers: headers });
    }
}