import { AppComponent } from './app-component.js';

const TEMPLATE = `
<form id="product-form">
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="product-name-input">
        <label class="mdl-textfield__label" for="product-name-input">Name...</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="product-price-input">
        <label class="mdl-textfield__label" for="product-price-input">Price...</label>
    </div>
    <button id="product-submit-btn" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Add
    </button>
</form>
`;

export class ProductForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.nameInput = this.querySelector('#product-name-input');
        this.priceInput = this.querySelector('#product-price-input');
        this.submitBtn = this.querySelector('#product-submit-btn');
    }

    bindEvents() {
        this.handleSubmitEvent();
    }

    handleSubmitEvent() {
        this.submitBtn.addEventListener('click', () => {
            // submit logic 
            console.log("Submit product " + this.nameInput.value);
            // create a complete object
            let product = {
                name: this.nameInput.value,
                price: this.priceInput.value
            }
            // custom event and dispatch
            let event = new CustomEvent('product-create', { detail: product });
            document.dispatchEvent(event);
        });
    }

    onReady() {
        console.log('Product Form Component is ready')
    }
}