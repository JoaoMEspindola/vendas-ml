import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from "./components/product-list/product-list.component";



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLink, ButtonComponent, ProductComponent, ProductListComponent]
})
export class HomeComponent {


}
