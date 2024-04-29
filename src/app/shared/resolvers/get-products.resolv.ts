import { inject } from "@angular/core";
import { ProdutoService } from "../services/produto.service";

export const getProducts = () =>
  {
    const produtoService = inject(ProdutoService);
    return produtoService.getAll();
  }
