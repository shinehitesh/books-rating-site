import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  // {
  //   path: 'books',
    
    //component: BooksListComponent //i can give path like this will open localhost:4200/books 
    //if i use pathmatch full and redirect to books
  // },

  {
    path: '**',
    redirectTo: '' //any other path will redirect to default path that is blank path or route we can redirect to 404 page not found also
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    useHash: true,

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
