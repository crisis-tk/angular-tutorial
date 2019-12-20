import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  selected:Task;

  // ActivedRouteサービスクラスを受け取る
  constructor(private route:ActivatedRoute, private taskDataService:TaskDataService) { }

  // コンポーネントの初期化時に自動的に呼ばれるメソッド
  ngOnInit() {
    // URL中のパラメータを受け取る
    this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        console.log('id=' + id);
        // サービスクラスからタスクデータを取得する
        this.taskDataService.getTask(id).subscribe(
          (data) => {
            console.log(data)
            this.selected = data
          });
      });
  }
}
