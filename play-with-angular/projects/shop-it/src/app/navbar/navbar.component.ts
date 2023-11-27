import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBadgeComponent } from '../cart-badge/cart-badge.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CartBadgeComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  title: string = ""

}
