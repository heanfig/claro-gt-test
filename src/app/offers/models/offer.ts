export interface Versions {
  characteristics: any[];
  id: any[];
  name: any[];
  productOfferingPrices: any[]
}
export interface Offers {
  id: number;
  href: string;
  versions: Versions[];
}
