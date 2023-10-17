import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  getByCriteria(value: string, page: Number, pageSize: Number, sort: string, order: string): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.server + `/product/listpage?value=${value}&page=${page}&pageSize=${pageSize}&sort=${sort}&order=${order}`);
  }
  
}
