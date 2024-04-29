import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../shared/services/produto.service';
import { FormComponent } from '../../shared/components/form/form.component';
import { Produto } from '../../shared/interfaces/producto.interface';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  productService = inject(ProdutoService);
  _snackBar = inject(MatSnackBar);
  _router = inject(Router);

  produto: any = inject(ActivatedRoute).snapshot.data['product'];




  onSubmit(product: Produto) {
    this.productService.put(this.produto.id, product).subscribe(() => {
      this._snackBar.open('Produto editado com sucesso', 'OK')
    })
    this._router.navigateByUrl('/');
  }

}
