import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from "./components/product-list/product-list.component";



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ProductComponent, ProductListComponent]
})
export class HomeComponent {


}
