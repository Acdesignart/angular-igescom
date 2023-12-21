import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[bguiClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output()
  public bguiClickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.bguiClickOutside.emit(event);
    }
  }
}
