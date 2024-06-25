import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../model/produto';

export const productResolver: ResolveFn<Produto> = (route, state) => {

  if (route.params && route.params['id']){
    return inject(ProdutosService).loadById(route.params['id']);
  }
  return {id: '', name: '', amount: 0, brand: '', reference: '', image: ''};
};
