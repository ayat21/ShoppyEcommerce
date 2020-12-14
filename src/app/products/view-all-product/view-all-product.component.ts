import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: Product ;
  constructor( private ProductService:ProductService) { }

  ngOnInit(): void {
    this.ProductService.viewProduct().subscribe(data=>{
      this.productList=data;
    })
  }

}
