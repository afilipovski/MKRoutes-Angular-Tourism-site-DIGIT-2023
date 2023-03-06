import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.055)';
    this.el.nativeElement.style.boxShadow = 'inset 0 0 0 1000px rgba(0,0,0,.2)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.boxShadow = '';
  }

  // highlight(color: string) {
  //   this.el.nativeElement.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,.2)"
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
