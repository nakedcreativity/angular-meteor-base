import { AppComponent } from './app.component';
import { Ng2StateDeclaration, loadNgModule, Transition, UIRouter } from '@uirouter/angular';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable, ObservableCursor } from 'meteor-rxjs';

// core components
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// {
//         path: 'todoList',
//         component: TodoListComponent
//       },
//       {
//         path: 'todoAdd',
//         component: TodoAddComponent
//       },
//       // Home Page
//       {
//         path: '',
//         redirectTo: '/todoList',
//         pathMatch: 'full'
//       },
//       // 404 Page
//       {
//         path: '**',
//         component: PageNotFoundComponent
//       }



export const mainState = {
	name: 'main', 
	url: '/todoList',
	component: TodoListComponent,
	resolve: [
	  
	]
}

export const addState = {
	name: 'add', 
	url: '/todoAdd',
	component: TodoAddComponent,
	resolve: [
	  
	]
}



/** The top level state(s) */
export const APP_STATES = [
	mainState,
	addState
]

export function demoResolve() {
	return new Promise((resolve, reject) => {
		resolve()
	})
}
