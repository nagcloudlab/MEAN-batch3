import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingBoxComponent } from './voting-box/voting-box.component';
import { VotingItemComponent } from './voting-item/voting-item.component';
import { VotingTableComponent } from './voting-table/voting-table.component';



@NgModule({
  declarations: [
    VotingBoxComponent,
    VotingItemComponent,
    VotingTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VotingBoxComponent,
  ]
})
export class VotingModule { }
