/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  LimeWebComponentPlatform,
} from 'lime-web-component-platform/lime-web-component-platform.interface';

declare global {

  namespace StencilComponents {
    interface MyPluginNrTwo {
      'limeWebComponentPlatform': LimeWebComponentPlatform;
    }
  }

  interface HTMLMyPluginNrTwoElement extends StencilComponents.MyPluginNrTwo, HTMLStencilElement {}

  var HTMLMyPluginNrTwoElement: {
    prototype: HTMLMyPluginNrTwoElement;
    new (): HTMLMyPluginNrTwoElement;
  };
  interface HTMLElementTagNameMap {
    'my-plugin-nr-two': HTMLMyPluginNrTwoElement;
  }
  interface ElementTagNameMap {
    'my-plugin-nr-two': HTMLMyPluginNrTwoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-plugin-nr-two': JSXElements.MyPluginNrTwoAttributes;
    }
  }
  namespace JSXElements {
    export interface MyPluginNrTwoAttributes extends HTMLAttributes {
      'limeWebComponentPlatform'?: LimeWebComponentPlatform;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;