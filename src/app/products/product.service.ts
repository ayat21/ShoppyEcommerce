import { Category } from '../layout/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from,Observable,observable } from 'rxjs';
import {Product} from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Httpclient:HttpClient) { }

  createProduct(productBody: any) :Observable<Product>{
    const baseUrl="http://localhost:3000/products";
    return this.Httpclient.post<Product>(baseUrl,productBody);
  }
  viewProduct():Observable<Product>{
    const baseUrl="http://localhost:3000/product/" ;
    return this.Httpclient.get<Product>(baseUrl);
  }
  updateProduct(productId :any,productBody :any):Observable<Product>{
    const baseUrl="http://localhost:3000/product"+productId;
    return this.Httpclient.put<Product>(baseUrl,productBody);
  }
  deleteProduct(productId: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product"+productId;
    return this.Httpclient.delete<Product>(baseUrl);
  }
  serachCategoryProduct(catigoryId: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product?catigoryId="+catigoryId;
    return this.Httpclient.get<Product>(baseUrl);
  }
  serachDateProduct(dateParam: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/date"+dateParam;
    return this.Httpclient.get<Product>(baseUrl);
  }
  getCategory() {
    const categoryUrl="http://localhost:3000/categories";
    return this.Httpclient.get<Category>(categoryUrl);
  }
}
