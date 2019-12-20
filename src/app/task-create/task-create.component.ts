import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task:Task = new Task(0, '', '');

  newTask() {
    // ボタン押下されたときに loggerサービスの logメソッドを呼び出す.
    this.logger.log(`登録したタスク：${this.task.todo}`);
    alert(`
      ID: ${this.task.id} 
      やること: ${this.task.todo} 
      プライオリティ: ${this.task.priority}`);
  }

  // コンストラクタの引数に, このコンポーネントで使いたいサービスを指定する.
  // すると, Angular がどのサービスが必要とされているか判断し, DI(依存性注入)される.
  constructor(private logger:LoggerService) { }
  ngOnInit() {
  }
}
