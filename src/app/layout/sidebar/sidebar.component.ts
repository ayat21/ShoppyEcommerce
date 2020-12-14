import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: Category ;
  constructor(private Productservice: ProductService) { }

  ngOnInit(): void {
    this.Productservice.getCategory().subscribe(data =>
      {this.categoryList = data; });

  }

}
