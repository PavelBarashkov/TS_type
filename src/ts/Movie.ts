import { Product } from "./interface/product";

export class Movie {
    private items: Product[] = [];


    add(item: Product): void {
        this.items.push(item);
    }

    getAll(): Product[] {
        return [...this.items];
    }
}