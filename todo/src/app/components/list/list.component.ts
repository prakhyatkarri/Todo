import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle: string = '';

  constructor() { }

  ngOnInit() {
    let id = 0;
    this.todos.push(new Todo(++id, 'Finish Angular', false, false));
    this.todos.push(new Todo(++id, 'Take over world', false, false));
    this.todos.push(new Todo(++id, 'Go to Moon', false, false));
    console.log(this.todos);

  }

  addTodo() {
    this.todos.push(new Todo(this.todos.length + 1, this.todoTitle, false, false))
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log(this.todos);
  }

  updateCompleted(id) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    }
    console.log(this.todos);
  }

  editTodo(id) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.editing= !todo.editing;
      }
    }
  }

  updateTitle(id, title) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.title= title;
        todo.editing = !todo.editing;
      }
    }
  }
}

export class Todo {
  constructor(id: number, title: string, completed: boolean, editing: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.editing = editing;
  }
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;
}

