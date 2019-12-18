import { Category } from "./category";

export interface Product {
    id: number;
    barcode: number;
    name: string;
    price: number;
    category: Category;
}
