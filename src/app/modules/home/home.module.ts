import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButonDeleteAllComponent } from './components/todo-buton-delete-all/todo-buton-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
