import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voting-item',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './voting-item.component.html',
  styleUrl: './voting-item.component.css'
})
export class VotingItemComponent {

  @Input("value")
  item!: any;

  @Output()
  vote: EventEmitter<any> = new EventEmitter()

  handleLike() {
    this.vote.emit({ type: 'like', item: this.item })
  }
  handleDislike() {
    this.vote.emit({ type: 'dislike', item: this.item })
  }

}
