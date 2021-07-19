import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import Swal from 'sweetalert2';
import { Books } from '../data';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksData: any
  constructor() {
    this.booksData = Books  //i've used static data to fetch books data please check data.ts
    console.log(this.booksData)
  }

  ngOnInit(): void {
    
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    //to get the rating show popup using sweetalert2 once you submit you can see your rating as well as your old rating
    Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = "myemail@gmail.com"
        const password = "password"
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
        Login: "myemail@gmail.com"
        Password: "password",
        Your Rating: ${$event.newValue},
        Old Rating: ${$event.oldValue},
      `.trim())
    })
  }
}
