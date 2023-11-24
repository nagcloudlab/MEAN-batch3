import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

  customerModel: any = {
    firstName: "foo",
    lastName: 'bar'
  }

  loadCustomer() {
    this.customerModel = {
      firstName: "Nagabhushanam",
      lastName: "N"
    }
  }

  handleSubmit(event: SubmitEvent, customerForm: NgForm) {
    if (customerForm.valid) {
      let formData = customerForm.value;
      console.log(formData)
      console.log(this.customerModel)
    }
  }

}
