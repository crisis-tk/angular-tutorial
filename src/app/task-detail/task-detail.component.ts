import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  taskList:Task[] = [
    new Task( 1, 'アプリのデザイン', 'すぐやる'),
    new Task( 2, '実装', 'なるべく早く'),
    new Task( 3, 'テスト', '気が向いたら'),
  ];
  selected:Task;

  // ActivedRouteサービスクラスを受け取る
  constructor(private route:ActivatedRoute) { }

  // コンポーネントの初期化時に自動的に呼ばれるメソッド
  ngOnInit() {
    // URL中のパラメータを受け取る
    this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        console.log('id=' + id);
        // パラメータ:id とタスクの id が一致するものだけを取り出す.
        // filterメソッドの戻り値は「配列」なので, 何件目を取り出すかを指定する.
        this.selected = this.taskList.filter(
          (task) => task.id === Number(id)
        )[0];
      }
    );
  }
}
