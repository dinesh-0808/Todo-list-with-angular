import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //@input() is a decorator that marks a class field as an input property and supplies configuration metadata
  @Input() todo: Todo = new Todo;
  @Input() i!: number
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter(); 
  constructor(){
    
  }

  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("onclick has been triggered");
  }

  onCheckboxClick(todo: Todo){
    console.log(todo);
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }

  ngOnInit(): void {

  }
}
