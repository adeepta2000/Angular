import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { ToastrService } from 'ngx-toastr';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(public productService:ProductService, public toast:ToastrService){}
  @ViewChild(ProductFormComponent) pro!:ProductFormComponent;
ngOnInit() {
  this.productService.GetProducts().subscribe(data=>{
    this.productService.ListOfProduct=data
  });
}

changeProductDetails(selectedProduct:Product)
{
  console.log(selectedProduct);
 this.productService.productData=selectedProduct;
 if(this.pro.isSlide==='off'){
 this.pro.hideShowSlide();
 }
}

deleteProduct(id:number){
if(confirm('Are you sure to delete this record?')){
  this.productService.DeleteProduct(id).subscribe(data=>{
    this.productService.GetProducts().subscribe(data=>{
      this.productService.ListOfProduct=data
      this.toast.error('Success','Data Deleted');

    });
  },
  err=>{
    
  });
}
}
}
