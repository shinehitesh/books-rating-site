import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  title: any
  posts: any
  ngOnInit(): void {
    this.title = "welcome to posts page"

    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .toPromise()
      .then(response => {
        this.posts = response;
      })
      .catch(console.log);
  }
}

