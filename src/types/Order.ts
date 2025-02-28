export interface Order {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PROGRESS' | 'DONE';
  products: Array<{
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }

  }>
}

