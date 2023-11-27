import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {

  reviewForm!: FormGroup

  @Output()
  newReview = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: ['5', []],
      body: ['', [Validators.minLength(4)]],
      author: ['who']
    })
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.reviewForm.valid) {
      this.newReview.emit({ formData: this.reviewForm.value })
    }
  }

}
