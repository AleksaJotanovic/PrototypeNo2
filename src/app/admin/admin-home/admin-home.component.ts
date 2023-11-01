import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Product } from 'src/data-types';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.crud.getProducts().subscribe((products: Product[]) => console.log(products));
  }

  // Functionalities
  addProduct(product: Product) {
    this.crud.postProduct(product).subscribe({ complete: () => console.log('Product successfully added.') });
  }

}
