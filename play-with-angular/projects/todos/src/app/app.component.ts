import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todos: Array<any> = [];

  constructor(private httpClient: HttpClient) { }

  apiUrl = "http://localhost:3000/api/v1/todos"

  ngOnInit() {
    this.httpClient.get(this.apiUrl)
      .subscribe((response: any) => {
        this.todos = response
      })
  }

  handleKeyUp(event: any) {
    if (event.key !== 'Enter') return
    let title = event?.target?.value
    this.httpClient.post(this.apiUrl, { title })
      .subscribe((response: any) => {
        this.todos = this.todos.concat(response)
        event.target.value = ""
      })
  }

  handleDelete(todoid: number) {
    this.httpClient.delete(`${this.apiUrl}/${todoid}`)
      .subscribe((response: any) => {
        this.todos = this.todos.filter((todo: any) => todo.id !== todoid)
      })
  }

}
