import { ViewContainerRef, Directive } from '@angular/core';

@Directive({ selector: '[ModalBodyContainer]'})
export class ModalBodyContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
