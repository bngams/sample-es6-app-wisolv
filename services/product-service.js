import { HttpClient } from "../utils/http.js";

export class ProductService {
    fetchProducts() {
        return HttpClient.get('http://locahost:3004/products');
    }
}