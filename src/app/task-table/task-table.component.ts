import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  // プロパティ
  taskList:Task[] = [];
  selected:string = '';

  // メソッド
  clickRow(task:Task) {
    this.selected = task.todo;
    // 遷移先の URLを指定する
    this.router.navigateByUrl('/detail/' + task.id);
  }
  onColor(taskTodo:string) {
    if ( taskTodo === this.selected) {
      return 'click';
    } else {
      return 'not_click';
    }
  }

  constructor(private router:Router, private taskDataService:TaskDataService) { }
  ngOnInit() {
    // このモジュールが呼び出されたときに実行される処理を書く.
    // サービスモジュール：TaskDataService のメソッドを呼び出す.
    this.taskDataService.getTaskList().subscribe(
      (datas) => this.taskList = datas
      );
  }
}
