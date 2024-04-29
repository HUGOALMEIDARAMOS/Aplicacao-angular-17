import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProdutoService } from "../services/produto.service";


export const getProduct = (route: ActivatedRouteSnapshot) =>
  {
    const produtoService = inject(ProdutoService);
    return produtoService.get(route.paramMap.get('id') as string);
  }
