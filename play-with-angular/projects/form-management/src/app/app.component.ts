import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ReactiveCustomerFormComponent } from './reactive-customer-form/reactive-customer-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CustomerFormComponent,
    ReactiveCustomerFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-management';
}
