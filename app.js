import { ProductForm } from './components/product-form.js';
import { ProductList } from './components/product-list.js';
import { ProductCard } from './components/product-card.js';

class App {
    constructor() {
        this.main();
    }

    main() {
        console.log('App initialization');
        customElements.define('product-form', ProductForm);
        customElements.define('product-list', ProductList);
        customElements.define('product-card', ProductCard);
    }
}

new App();