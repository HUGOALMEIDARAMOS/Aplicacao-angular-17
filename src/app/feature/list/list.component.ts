import { Component, inject, signal } from '@angular/core';
import { ProdutoService } from '../../shared/services/produto.service';
import { Produto } from '../../shared/interfaces/producto.interface';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../../shared/components/dialog-confirmation/dialog-confirmation.component';
import { filter } from 'rxjs';
import { NoItemsComponent } from './components/no-items/no-items.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, MatDialogModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  produto = signal<Produto[]>(inject(ActivatedRoute).snapshot.data['product']);
  produtoService = inject(ProdutoService);
  router = inject(Router);
  matDialog = inject(MatDialog);


  onEdit(product: Produto) {
    this.router.navigate(['edit-product', product.id])
  }

  onDelte(product: Produto) {
   this.matDialog.open(DialogConfirmationComponent, {
      data: product
    })
   .afterClosed()
   .pipe(filter((result) => result === true))
   .subscribe(result => {
      if (result) {
        this.produtoService.delete(product.id).subscribe(() => {
          this.produtoService.getAll().subscribe((product)=> {
            this.produto.set(product)
          });
        })
      }
    });
  }
}


