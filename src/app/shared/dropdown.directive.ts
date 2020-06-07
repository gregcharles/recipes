import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')
  private open = false;

  @HostListener('click')
  toggleOpen() {
    this.open = !this.open;
  }
}
