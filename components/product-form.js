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
}