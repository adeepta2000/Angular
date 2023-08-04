import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly apiUrl = 'https://localhost:44362/api/Product';

  constructor(private http: HttpClient) { }

  ListOfProduct:Product[]=[];

  productData:Product= new Product();

  GetProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  CreateProduct()
  {
return this.http.post(this.apiUrl,this.productData);
  }

  UpdateProduct() 
  {
    return this.http.put(`${this.apiUrl}/${this.productData.id}`,this.productData);
  }

  DeleteProduct(id: number)
   {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
