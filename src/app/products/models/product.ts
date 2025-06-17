import { Catalog } from "./catalog";

interface Product {
    id: number;
    name: string;
    description: string;
    finalPrice: number;
    catalog: Catalog;
}