import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../../../../model/produto';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from "../product/product.component";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Observable, first, tap } from 'rxjs';
import {CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ProdutosService } from '../../../../services/produtos.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [
      MatButtonModule,
      ProductComponent,
      MatCardModule,
      MatToolbarModule,
      CommonModule,
      MatIconModule,
      RouterLink]
})
export class ProductListComponent {

  productsList: Observable<Produto[]>;

  constructor(private produtosService:ProdutosService){
    this.productsList = produtosService.list()
        .pipe(
            first(),
            tap(produtos => console.log(produtos))
        );
  }

  refresh(){
    this.productsList = this.produtosService.list()
        .pipe(
            first(),
            tap(produtos => console.log(produtos))
        );
  }

  onDelete(id: string) {
    this.produtosService.remove(id).subscribe(() => {
      this.refresh();
    });
  }
}
