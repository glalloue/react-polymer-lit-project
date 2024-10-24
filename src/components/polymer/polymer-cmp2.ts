import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class PolymerCmp2 extends PolymerElement {
  
  static get is() {
    return 'polymer-cmp2';
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
        value: 'Composant Polymer inside a React component',
      },
    };
  }
}

customElements.define(PolymerCmp2.is, PolymerCmp2);
