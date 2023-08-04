import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared/brand.service';
import { Brand } from '../shared/brand.model';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  constructor(public brandService:BrandService){}
ngOnInit() {
  this.brandService.GetBrands().subscribe(data=>{
    this.brandService.ListOfBrand=data
  });

}
}
