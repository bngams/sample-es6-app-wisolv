import { ProductForm } from './components/product-form.js';

class App {
    constructor() {
        this.main();
    }

    main() {
        console.log('App initialization');
        customElements.define('product-form', ProductForm);
    }
}

new App();