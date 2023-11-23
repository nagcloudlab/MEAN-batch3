import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voting-box',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './voting-box.component.html',
  styleUrl: './voting-box.component.css'
})
export class VotingBoxComponent {


  votingItems: Array<string> = [
    "Mongo",
    "Express",
    "Angular",
    "Node.js"
  ]
  votingLines: Array<any> = []

  handleVote(vote: any) {
    let { type, item } = vote
    const existingVotingLine = this.votingLines.find(line => line.item === item);
    if (existingVotingLine) {
      if (type == "like") {
        existingVotingLine.likes++
      }
      if (type == "dislike") {
        existingVotingLine.dislikes++
      }
    } else {
      let newVotingLine: any = { item }
      if (type == "like") {
        newVotingLine.likes = 1
        newVotingLine.dislikes = 0
      }
      if (type == "dislike") {
        newVotingLine.likes = 0
        newVotingLine.dislikes = 1
      }
      this.votingLines.push(newVotingLine)
    }
  }

}
