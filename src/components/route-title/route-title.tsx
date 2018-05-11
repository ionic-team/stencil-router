import { Component, Prop } from '@stencil/core';

import { ActiveRouter } from '../../global/interfaces';

/**
  * Updates the document title when found.
  *
  * @name RouteTitle
  * @description
 */
@Component({
  tag: 'stencil-route-title'
})
export class RouteTitle {
  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;
  @Prop() pageTitle: string = '';

  componentWillLoad() {
    const suffix = this.activeRouter && this.activeRouter.get('titleSuffix') || '';
    document.title = `${this.pageTitle}${suffix}`;
  }

  render(): null {
    return null;
  }
}
