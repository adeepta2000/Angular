import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 constructor(public proService:ProductService, public toast:ToastrService){}

 @ViewChild('checkbox1') checkBox!: ElementRef;
 isSlide:string='off';

 ngOnInit() {
  
 }

 submit(form:NgForm){
    if(this.proService.productData.id==0)
      this.addProduct(form);
    
    else
      this.editProduct(form);
    
   
 }

 addProduct(myForm:NgForm){
  this.proService.CreateProduct().subscribe(d=>{
      this.resstForm(myForm);
      this.refreshData();
      this.toast.success('Success','Data Saved');
  });
 }


editProduct(myForm:NgForm){
  this.proService.UpdateProduct().subscribe(d=>{
    this.resstForm(myForm);
    this.refreshData();
    this.toast.warning('Success','Data Updated');
});
}

resstForm(myForm:NgForm){
myForm.form.reset(myForm.value);
this.proService.productData=new Product();
this.hideShowSlide();
}

refreshData(){
  this.proService.GetProducts().subscribe(data=>{
    this.proService.ListOfProduct=data;
          });
}

hideShowSlide(){
  if(this.checkBox.nativeElement.checked){
    this.checkBox.nativeElement.checked=false;
    this.isSlide='off';
  }
  else{
    this.checkBox.nativeElement.checked=true;
    this.isSlide='on';
  }
}

}
