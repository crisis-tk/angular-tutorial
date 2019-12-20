import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task:Task = new Task(0, '', '');

  newTask() {
    alert(`
      ID: ${this.task.id} 
      やること: ${this.task.todo} 
      プライオリティ: ${this.task.priority}`);
  }

  constructor() { }
  ngOnInit() {
  }
}
