export interface Produto{
  id?: string;
  title: string;
}

export type ProductPayload = Omit<Produto, 'id'>;
