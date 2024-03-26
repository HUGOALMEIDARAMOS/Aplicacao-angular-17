import { Component, inject, OnInit } from '@angular/core';
import { ProdutoService } from '../../shared/services/produto.service';
import { Produto } from '../../shared/interfaces/producto.interface';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

produtoService  = inject(ProdutoService);
produto: Produto[] = [];

ngOnInit(): void {
this.produtoService.getAll().subscribe((produtos) =>  this.produto = produtos);
}

}
