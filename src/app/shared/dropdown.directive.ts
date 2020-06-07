import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  private open: boolean;

  constructor(private buttonGroup: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.open = false;
    this.renderer.removeClass(this.buttonGroup.nativeElement, 'open');
  }

  @HostListener('click')
  onClick() {
    this.open = !this.open;
    if (this.open) {
      this.renderer.addClass(this.buttonGroup.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.buttonGroup.nativeElement, 'open');
    }
  }
}
