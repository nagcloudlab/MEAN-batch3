import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { zip } from 'rxjs'

@Component({
  selector: 'app-reactive-customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-customer-form.component.html',
  styleUrl: './reactive-customer-form.component.css'
})
export class ReactiveCustomerFormComponent {

  customerForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['ntt', [Validators.required, Validators.minLength(3), this.nttFirstNameValidator]],
      lastName: ['n'],
      dateGroup: this.fb.group({
        startDate: ['1', [Validators.required]],
        endDate: ['2', [Validators.required]]
      }, { validators: this.inRangeDateValidator }),
      email: ['ntt@mail.com', [Validators.required, Validators.email]],
      mobile: [''],
      notiType: ['email'],
      addressList: this.fb.array([])
    })

    // const valueChangesStream = this.customerForm.valueChanges
    // const stateChangesStream = this.customerForm.statusChanges
    // zip([valueChangesStream, stateChangesStream])
    //   .subscribe({
    //     next: ([value, state]) => {
    //       if (state === "VALID") {
    //         console.log(value)
    //       }
    //     }
    //   })


    const firstNameValueChangesStream = this.customerForm.controls['firstName'].valueChanges
    const firstNameStateChangesStream = this.customerForm.controls['firstName'].statusChanges
    zip([firstNameValueChangesStream, firstNameStateChangesStream])
      .subscribe({
        next: ([value, state]) => {
          if (state === "VALID") {
            console.log(value)
          }
        }
      })
  }

  get addressList() {
    return this.customerForm.get('addressList') as FormArray;
  }
  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      city: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  handleNewAddress() {
    this.addressList.push(this.createAddressFormGroup());
  }
  handleRemoveAddress(index: number) {
    this.addressList.removeAt(index);
  }

  handleNotiChange(notiType: string) {
    const mobileControl = this.customerForm.controls['mobile']
    if (notiType === 'sms') {
      mobileControl.setValidators([Validators.required, Validators.pattern(/\d{10}/)])
    } else {
      mobileControl.removeValidators([Validators.required])
    }
    mobileControl.updateValueAndValidity()
  }

  nttFirstNameValidator(firstNameFormControl: FormControl) {
    let fistNameValue = firstNameFormControl.value
    if (fistNameValue === ("ntt")) {
      return null;
    } else {
      return { firstName: "..." }
    }
  }
  inRangeDateValidator(group: FormGroup) {
    const startDateValue = group.controls['startDate'].value
    const endDateValue = group.controls['endDate'].value
    console.log(startDateValue)
    console.log(endDateValue)
    if (Number.parseInt(startDateValue) < Number.parseInt(endDateValue)) {
      return null;
    } else {
      return { range: '' }
    }
  }

  handleSubmit(event: SubmitEvent) {
    if (this.customerForm.valid) {
      const formData = this.customerForm.value
      console.log(formData)
      this.customerForm.reset()
    }
  }

}
