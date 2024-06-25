import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { productResolver } from './guards/product.resolver';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'cadastro',
        component: CadastroComponent,
        resolve: { product: productResolver}
    },

    {
        path: 'edit/:id',
        component: CadastroComponent,
        resolve: { product: productResolver}
    }
];
