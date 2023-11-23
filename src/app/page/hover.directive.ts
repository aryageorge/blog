import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

 
  constructor(private el:ElementRef){
    console.log(this.el);
    
   }
   @HostListener('mouseenter') onMouseEnter(){
    this.highlight('steelblue')
    
    
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
    
   }
   private highlight(color:string){
  this.el.nativeElement.style.backgroundColor=color
 

}
  
  
}
  


