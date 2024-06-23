import { Injectable } from '@angular/core';
import { Produto } from '../../../model/produto';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'api/produtos';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.API);
  }

  save(record: Produto){
    return this.httpClient.post<Produto>(this.API, record).pipe(first());
  }
}
