import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/interfaces/product.interface";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  myProduct: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.myProduct = await this.productsService.getById(Number(params.idproduct))
      console.log(params.idproduct);
    })
  }
}
