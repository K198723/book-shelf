import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyBookListComponent } from './my-book-list/my-book-list.component';
import { EntireBookListComponent } from './entire-book-list/entire-book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'my-book-list', component: MyBookListComponent },
  { path: 'entire-book-list', component: EntireBookListComponent },
  { path: 'book-detail', component: BookDetailComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
