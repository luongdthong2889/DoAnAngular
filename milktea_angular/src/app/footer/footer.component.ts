import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private productService:ProductService) { }
  products!: Product[]
  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }

}
