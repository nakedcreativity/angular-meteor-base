import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'todo-add',
  templateUrl: 'todo-add.html'
})
export class TodoAddComponent {
  
  name = new FormControl('');

  constructor(){
  	console.log('todo add constructor')
  }

  


  addTodo() {
    Meteor.call('addTodo', this.name.value);
    this.name.setValue('');
  }
}

