import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookListComponent } from './my-book-list/my-book-list.component';
import { EntireBookListComponent } from './entire-book-list/entire-book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    MyBookListComponent,
    EntireBookListComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
