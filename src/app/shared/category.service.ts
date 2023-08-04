import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly apiUrl = 'https://localhost:44362/api/Category';

  constructor(private http: HttpClient) { }

  ListOfCategory:Category[]=[];

  categoryData:Category= new Category();

  GetCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
