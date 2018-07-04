import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import {SharedModule} from '../shared/shared.module';
import {TodosService} from './todos.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TodosComponent
  ],
  exports: [
    TodosComponent
  ],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
