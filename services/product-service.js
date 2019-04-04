import { HttpClient } from "../utils/http.js";

export class ProductService {
    fetchProducts() {
        return HttpClient.get('http://localhost:3004/products');
    }
}