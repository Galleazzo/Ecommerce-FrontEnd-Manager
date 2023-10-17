import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService ){}

  
  ngOnInit() {
    this.getByCriteria();
  }

  getByCriteria(){
    debugger
    this.productService.getByCriteria("", 0, 10, "id", "asc").subscribe((result) => {
      console.log(result);

    })
  }


}
