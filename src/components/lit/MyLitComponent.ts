// src/MyLitComponent.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-lit-component')
export class MyLitComponent extends LitElement {
  @property({ type: String }) message = 'Hello from Lit!';

  static styles = css`
    :host {
      display: block;
      background-color: lightblue;
      border-radius: 8px;
      color: black;
      text-align: center;
      padding: 0.25em;
    }
  `;

  render() {
    return html`<p>${this.message}</p>`;
  }
}
