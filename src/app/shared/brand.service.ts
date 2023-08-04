import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from './brand.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  readonly apibUrl = 'https://localhost:44362/api/Brand';

  constructor(private http: HttpClient) { }

  ListOfBrand:Brand[]=[];

  brandData:Brand= new Brand();

  GetBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apibUrl);
  }
}
