import { Component, OnInit } from '@angular/core';
import { Database } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  id!: number;
  productForm!: FormGroup;
  editMode=false;
  constructor(public database:Database,private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;    
        this.initForm();
      }
    )
  }
  initForm(){
    let productID;
    let productName='';
    let productPrice;
    let productImagePath='';
    let productDescription='';
    let productInformation='';
    let productCateID;
    if(this.editMode){
      const product=this.productService.getProduct(this.id);
      console.log(this.id);
      console.log(product);
      productID=product.id;
      productName=product.name;
      productPrice=product.price;
      productImagePath=product.imagePath;
      productDescription=product.description;
      productInformation=product.information;
      productCateID = product.cateid;
    }
    this.productForm= new FormGroup({
      'id':new FormControl(productID,[Validators.required,Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'name':new FormControl(productName,Validators.required),
      'price':new FormControl(productPrice,Validators.required),
      'imagePath':new FormControl(productImagePath,Validators.required),
      'description':new FormControl(productDescription,Validators.required),
      'information':new FormControl(productInformation,Validators.required),
      'cateid':new FormControl(productCateID,Validators.required),
    });
  }
  onSubmitProduct(){
    if(this.editMode){
      this.productService.updateProduct(this.id,this.productForm.value);
    }
    else{
      this.productService.addProduct(this.productForm.value);
    }
  }
  onCancel(){
    this.router.navigate(['../admin/order'])
  }
}
