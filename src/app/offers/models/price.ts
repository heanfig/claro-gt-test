interface Amount {
    amount: number;
    units: {
        code: string;
    }
}

export interface Price {
    id: number;
    name: string;
    price: Amount;
  }
  