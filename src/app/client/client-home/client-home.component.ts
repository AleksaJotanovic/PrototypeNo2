import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Product } from 'src/data-types';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts() {
    this.crud.getProducts().subscribe((products: Product[]) => this.products = products);
  }

}
