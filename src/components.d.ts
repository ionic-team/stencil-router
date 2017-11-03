/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { TestApp as TestApp } from './components/__tests__/test-app';

interface HTMLTestAppElement extends TestApp, HTMLElement {
}
declare var HTMLTestAppElement: {
  prototype: HTMLTestAppElement;
  new (): HTMLTestAppElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "test-app": HTMLTestAppElement;
  }
  interface ElementTagNameMap {
      "test-app": HTMLTestAppElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "test-app": JSXElements.TestAppAttributes;
      }
  }
  namespace JSXElements {
      export interface TestAppAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { TestDemoFour as TestDemoFour } from './components/__tests__/test-demo-four';

interface HTMLTestDemoFourElement extends TestDemoFour, HTMLElement {
}
declare var HTMLTestDemoFourElement: {
  prototype: HTMLTestDemoFourElement;
  new (): HTMLTestDemoFourElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "test-demo-four": HTMLTestDemoFourElement;
  }
  interface ElementTagNameMap {
      "test-demo-four": HTMLTestDemoFourElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "test-demo-four": JSXElements.TestDemoFourAttributes;
      }
  }
  namespace JSXElements {
      export interface TestDemoFourAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          pages?: any,
          match?: any,
          history?: any
      }
  }
}

import { TestDemoSeven as TestDemoSeven } from './components/__tests__/test-demo-seven';

interface HTMLTestDemoSevenElement extends TestDemoSeven, HTMLElement {
}
declare var HTMLTestDemoSevenElement: {
  prototype: HTMLTestDemoSevenElement;
  new (): HTMLTestDemoSevenElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "test-demo-seven": HTMLTestDemoSevenElement;
  }
  interface ElementTagNameMap {
      "test-demo-seven": HTMLTestDemoSevenElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "test-demo-seven": JSXElements.TestDemoSevenAttributes;
      }
  }
  namespace JSXElements {
      export interface TestDemoSevenAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          pages?: any,
          match?: any,
          history?: any
      }
  }
}

import { TestDemoSix as TestDemoSix } from './components/__tests__/test-demo-six';

interface HTMLTestDemoSixElement extends TestDemoSix, HTMLElement {
}
declare var HTMLTestDemoSixElement: {
  prototype: HTMLTestDemoSixElement;
  new (): HTMLTestDemoSixElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "test-demo-six": HTMLTestDemoSixElement;
  }
  interface ElementTagNameMap {
      "test-demo-six": HTMLTestDemoSixElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "test-demo-six": JSXElements.TestDemoSixAttributes;
      }
  }
  namespace JSXElements {
      export interface TestDemoSixAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          pages?: any,
          match?: any,
          history?: any
      }
  }
}

import { TestDemoThree as TestDemoThree } from './components/__tests__/test-demo-three';

interface HTMLTestDemoThreeElement extends TestDemoThree, HTMLElement {
}
declare var HTMLTestDemoThreeElement: {
  prototype: HTMLTestDemoThreeElement;
  new (): HTMLTestDemoThreeElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "test-demo-three": HTMLTestDemoThreeElement;
  }
  interface ElementTagNameMap {
      "test-demo-three": HTMLTestDemoThreeElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "test-demo-three": JSXElements.TestDemoThreeAttributes;
      }
  }
  namespace JSXElements {
      export interface TestDemoThreeAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          pages?: any,
          match?: any,
          history?: any
      }
  }
}

import { AsyncContent as StencilAsyncContent } from './components/async-content/async-content';

interface HTMLStencilAsyncContentElement extends StencilAsyncContent, HTMLElement {
}
declare var HTMLStencilAsyncContentElement: {
  prototype: HTMLStencilAsyncContentElement;
  new (): HTMLStencilAsyncContentElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-async-content": HTMLStencilAsyncContentElement;
  }
  interface ElementTagNameMap {
      "stencil-async-content": HTMLStencilAsyncContentElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-async-content": JSXElements.StencilAsyncContentAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilAsyncContentAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          documentLocation?: string
      }
  }
}

import { Redirect as StencilRouterRedirect } from './components/redirect/redirect';

interface HTMLStencilRouterRedirectElement extends StencilRouterRedirect, HTMLElement {
}
declare var HTMLStencilRouterRedirectElement: {
  prototype: HTMLStencilRouterRedirectElement;
  new (): HTMLStencilRouterRedirectElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-router-redirect": HTMLStencilRouterRedirectElement;
  }
  interface ElementTagNameMap {
      "stencil-router-redirect": HTMLStencilRouterRedirectElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-router-redirect": JSXElements.StencilRouterRedirectAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilRouterRedirectAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          url?: string
      }
  }
}

import { RouteLink as StencilRouteLink } from './components/route-link/route-link';

interface HTMLStencilRouteLinkElement extends StencilRouteLink, HTMLElement {
}
declare var HTMLStencilRouteLinkElement: {
  prototype: HTMLStencilRouteLinkElement;
  new (): HTMLStencilRouteLinkElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-route-link": HTMLStencilRouteLinkElement;
  }
  interface ElementTagNameMap {
      "stencil-route-link": HTMLStencilRouteLinkElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-route-link": JSXElements.StencilRouteLinkAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilRouteLinkAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          url?: string,
          urlMatch?: any,
          exact?: boolean,
          custom?: string,
          activeClass?: string
      }
  }
}

import { RouteTitle as StencilRouteTitle } from './components/route-title/route-title';

interface HTMLStencilRouteTitleElement extends StencilRouteTitle, HTMLElement {
}
declare var HTMLStencilRouteTitleElement: {
  prototype: HTMLStencilRouteTitleElement;
  new (): HTMLStencilRouteTitleElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-route-title": HTMLStencilRouteTitleElement;
  }
  interface ElementTagNameMap {
      "stencil-route-title": HTMLStencilRouteTitleElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-route-title": JSXElements.StencilRouteTitleAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilRouteTitleAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          title?: string
      }
  }
}

import { Route as StencilRoute } from './components/route/route';

interface HTMLStencilRouteElement extends StencilRoute, HTMLElement {
}
declare var HTMLStencilRouteElement: {
  prototype: HTMLStencilRouteElement;
  new (): HTMLStencilRouteElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-route": HTMLStencilRouteElement;
  }
  interface ElementTagNameMap {
      "stencil-route": HTMLStencilRouteElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-route": JSXElements.StencilRouteAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilRouteAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          url?: any,
          component?: string,
          componentProps?: any,
          exact?: boolean,
          group?: string,
          routeRender?: any
      }
  }
}

import { Router as StencilRouter } from './components/router/router';

interface HTMLStencilRouterElement extends StencilRouter, HTMLElement {
}
declare var HTMLStencilRouterElement: {
  prototype: HTMLStencilRouterElement;
  new (): HTMLStencilRouterElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stencil-router": HTMLStencilRouterElement;
  }
  interface ElementTagNameMap {
      "stencil-router": HTMLStencilRouterElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stencil-router": JSXElements.StencilRouterAttributes;
      }
  }
  namespace JSXElements {
      export interface StencilRouterAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          root?: string,
          titleSuffix?: string
      }
  }
}

