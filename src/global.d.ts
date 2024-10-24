// src/global.d.ts
/* See https://stackoverflow.com/questions/55424417/typescript-error-property-does-not-exist-on-type-jsx-intrinsicelements-when */
declare namespace JSX {
    interface IntrinsicElements {
      'my-lit-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { message?: string };
      'polymer-cmp1': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'polymer-cmp2': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
  