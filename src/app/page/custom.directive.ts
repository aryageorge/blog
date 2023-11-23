import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
@Input() string=""


  constructor(private el:ElementRef) {
    console.log(this.el)
    this.el.nativeElement.style.color="brown"
    
   }

}
