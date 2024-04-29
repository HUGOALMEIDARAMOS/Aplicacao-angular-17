import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Produto } from '../../../../shared/interfaces/producto.interface';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  //recebe o valor e transforma em um signal, uma forma melhorada do @input, o .require, obriga que esse valor deve ser obrigatorio, ou seja, existir
  product = input.required<Produto>();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  productTitle = computed(() => this.product().title)

}
