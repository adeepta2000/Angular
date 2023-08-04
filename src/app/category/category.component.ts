import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public categoryService:CategoryService){}
ngOnInit() {
  this.categoryService.GetCategories().subscribe(data=>{
    this.categoryService.ListOfCategory=data
  });

}

}
