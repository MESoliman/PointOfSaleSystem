import { Category } from "./category";

export interface ProductDisplay {
    id: number;
    barcode: number;
    name: string;
    price: number;
    quantity: number;
    category: Category;
}
