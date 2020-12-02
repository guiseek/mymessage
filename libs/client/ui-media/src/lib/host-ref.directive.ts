import { ComponentFactoryResolver, Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mediaHostRef]'
})
export class HostRefDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
    private elRef: ElementRef<HTMLElement>,
    private cdr: ComponentFactoryResolver
  ) { }

}
