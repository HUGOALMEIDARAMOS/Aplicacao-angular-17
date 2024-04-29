import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from '../interfaces/producto.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  httpClient = inject(HttpClient)

  constructor() { }

  getAll(){
    return this.httpClient.get<Produto[]>('/api/produtos');
  }

  get(id: any){
    console.log('no servico o id: ' + id);
    return this.httpClient.get<Produto>(`/api/produtos/${id}`).pipe(
      tap((res: any) => console.log('produto do servidor =>', res))
    );

  }

  post(payload: any){
    return this.httpClient.post('/api/produtos', payload);
  }

  put(id: any, payload: any){
    return this.httpClient.put(`/api/produtos/${id}`, payload);
  }

  delete(id: any){
    return this.httpClient.delete(`/api/produtos/${id}`);
  }
}
