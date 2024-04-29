import { Component, inject } from '@angular/core';
import { ProdutoService } from '../../shared/services/produto.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router  } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Produto } from '../../shared/interfaces/producto.interface';

import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  productService = inject(ProdutoService);
  _snackBar = inject(MatSnackBar);
  _router = inject(Router);



  onSubmit(produto: Produto){
    this.productService.post(produto).subscribe(() => {
      this._snackBar.open('Produto cadastrado com sucesso', 'OK')
    })
    this._router.navigateByUrl('/');
  }


}
