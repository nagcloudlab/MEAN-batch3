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
  currentTab = 1;
  products: Array<any> = [
    {
      id: 1,
      name: "Laptop",
      price: 3000.00,
      description: "Laptop description",
      imagePath: 'assets/Laptop.png'
    },
    {
      id: 2,
      name: "Mobile",
      price: 2000.00,
      description: "Mobile description",
      imagePath: 'assets/Mobile.png'
    },
  ]
  isTabSelected(tabIndex: number): boolean {
    return this.currentTab === tabIndex
  }
  handleTabChange(tabIndex: number) {
    this.currentTab = tabIndex
  }
  handleBuy(event: MouseEvent) {
    console.log(event);
  }
}
