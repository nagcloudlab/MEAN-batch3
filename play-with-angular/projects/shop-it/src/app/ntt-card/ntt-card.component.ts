import { Component, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ntt-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ntt-card.component.html',
  styleUrl: './ntt-card.component.css'
})
export class NttCardComponent {

  @ContentChild("b")
  cardBody!: ElementRef;

  ngAfterContentInit() {
    // why we need
    // todo any low-level operations on content DOM elements
    this.cardBody.nativeElement.addEventListener('mouseover', (e: any) => {
      this.cardBody.nativeElement.style.color = "tomato"
    })
  }

}
