import { AppComponent } from './app-component.js';
import { ProductCard } from './product-card.js';
import { ProductService } from '../services/product-service.js';

const TEMPLATE = `<div id="product-container"></div>`;

export class ProductList extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.productContainer = this.querySelector('#product-container');
    }

    bindEvents() {
        this.handleProductCreateEvent();
    }

    handleProductCreateEvent() {
        document.addEventListener('product-create', (e) => {
            console.log('product to add ', e.detail);
            // add a product card
            // create a card
            // let card = new ProductCard(e.detail);
            // // add card to our List
            // this.productContainer.appendChild(card);

            this.productContainer.appendChild(new ProductCard(e.detail));

        })
    }

    loadProducts() {
        let productService = new ProductService();
        productService.fetchProducts()
            .then((data) => {
                console.log("request result ", data);
                for (const p of JSON.parse(data)) {
                    this.productContainer.appendChild(new ProductCard(p));
                }
            });
    }

    onReady() {
        console.log('Product List Component is ready');
        this.loadProducts();
    }
}