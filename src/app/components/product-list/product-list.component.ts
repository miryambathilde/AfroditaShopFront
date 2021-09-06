import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  arrProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<any> {
    this.arrProducts = await this.productsService.getAll();
    console.log(this.arrProducts);
  }
}
