import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'shop-IT-v1';
  product: any = {
    id: 1,
    name: "Laptop",
    price: 1000.00,
    description: "Laptop description",
    imagePath: 'assets/Laptop.png'
  }
  handleBuy(event: MouseEvent) {
    console.log(event);
  }
}
