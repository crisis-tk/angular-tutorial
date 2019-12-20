import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  // プロパティ
  taskList:Task[] = [
    new Task( 1, 'アプリのデザイン', 'すぐやる'),
    new Task( 2, '実装', 'なるべく早く'),
    new Task( 3, 'テスト', '気が向いたら'),
  ];
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

  constructor(private router:Router) { }
  ngOnInit() {
  }
}
