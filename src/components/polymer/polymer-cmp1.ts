import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class PolymerCmp1 extends PolymerElement {
  
  static get is() {
    return 'polymer-cmp1';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: lightblue;
          border-radius: 8px;
          color: black;
          text-align: center;
          padding: 0.25em;
        }
      </style>
      <p>{{message}}</p>
    `;
  }

  static get properties() {
    return {
      message: {
        type: String,
        value: 'Standalone polymer component',
      },
    };
  }
}

customElements.define(PolymerCmp1.is, PolymerCmp1);
