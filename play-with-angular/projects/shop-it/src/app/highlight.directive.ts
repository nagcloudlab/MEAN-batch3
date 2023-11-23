import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input()
  appHighlight: string = "yellow"

  constructor(private ele: ElementRef) {
    const nativeElement = ele.nativeElement
    // nativeElement.addEventListener('mouseenter', (e: any) => {
    //   nativeElement.style.backgroundColor = "yellow"
    // })
    // ele.nativeElement.addEventListener('mouseleave', (e: any) => {
    //   nativeElement.style.backgroundColor = ""
    // })
  }

  @HostListener("mouseenter")
  handleMouseEnter() {
    this.ele.nativeElement.style.backgroundColor = this.appHighlight || "yellow"
  }
  @HostListener("mouseleave")
  landleMouseleave() {
    this.ele.nativeElement.style.backgroundColor = ""
  }


}
