import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
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

  loadById(id: string){
    return this.httpClient.get<Produto>(`${this.API}/${id}`);
  }

  save(record: Produto){
    console.log(record)
    if (record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Produto>){
    return this.httpClient.post<Produto>(this.API, record).pipe(first());
  }

  private update(record: Partial<Produto>){
    return this.httpClient.put<Produto>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
