import { ProductService } from './../product.service';
import { Category } from './../../layout/category';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  
  catigoryId!: Category  ;
  productList!: Product; 
  constructor(private Activatedroute:ActivatedRoute,
              private ProductService:ProductService) { }
  ngOnInit(): void {
    this.Activatedroute.queryParams.subscribe(data =>
     { this.catigoryId = data.id;
       this.ProductService.serachCategoryProduct(this.catigoryId)
      .subscribe(Categorydata =>
      {  this.productList= Categorydata;}
        );

    })
    
  }

}
