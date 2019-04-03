export class AppComponent extends HTMLElement {

    // called when component is displayed
    connectedCallback() {
        this.display();
        this.bindElements();
        this.bindEvents();
        this.onReady();
    }

    // html render
    display() { }

    // listen events on template (events listners)
    bindEvents() { }

    // bind template elements (button, ...)
    bindElements() { }

    // called when component is ready
    onReady() { }
}