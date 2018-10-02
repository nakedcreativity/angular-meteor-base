import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule, Transition } from "@uirouter/angular";

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { APP_STATES } from './app.states'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forRoot({
      states: APP_STATES, 
      useHash: false
      //config: routerConfigFn 
    }),
    // RouterModule.forRoot([
    //   {
    //     path: 'todoList',
    //     component: TodoListComponent
    //   },
    //   {
    //     path: 'todoAdd',
    //     component: TodoAddComponent
    //   },
    //   // Home Page
    //   {
    //     path: '',
    //     redirectTo: '/todoList',
    //     pathMatch: 'full'
    //   },
    //   // 404 Page
    //   {
    //     path: '**',
    //     component: PageNotFoundComponent
    //   }
    // ])
  ],
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
