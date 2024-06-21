import { Component } from '@angular/core';
import { Produto } from '../../../../model/produto';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { ProductComponent } from "../product/product.component";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProdutosService } from '../../services/produtos.service';
import { Observable, first, tap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ButtonComponent, ProductComponent, MatCardModule, MatToolbarModule, CommonModule]
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


}
