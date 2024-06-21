import { Injectable } from '@angular/core';
import { Produto } from '../../../model/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.API);
  }
}
