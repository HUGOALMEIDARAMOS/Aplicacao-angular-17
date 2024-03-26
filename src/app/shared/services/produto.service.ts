import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  httpClient = inject(HttpClient)

  constructor() { }

  getAll(){
    return this.httpClient.get<Produto[]>('/api/produtos');
  }
}
