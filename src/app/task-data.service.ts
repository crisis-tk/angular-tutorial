import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  // ダミーデータを何件か用意しておく(-> あとでサーバから受け取るように変更する)
  taskList:Task[] = [
    new Task( 1, 'アプリのデザイン', 'すぐやる'),
    new Task( 2, '実装', 'なるべく早く'),
    new Task( 3, 'テスト', '気が向いたら'),
  ];

  // タスクリストを返すメソッド
  //   配列を直接返さずに Observableオブジェクトを返すようにする.
  //   サービスからコンポーネントにデータを返す際の実践的な手法.
  getTaskList(): Observable<Task[]> {
    // ofメソッドで 配列 から Observableオブジェクト を生成する
    return of(this.taskList);
  }

  // 指定された id のタスクを返すメソッド
  getTask(id:string): Observable<Task> {
    const selectTask = this.taskList.filter(
      task => task.id === Number(id)
      )[0];
    return of(selectTask);
  }

  // 新しいタスクを作るメソッド
  addTask(task:Task): Observable<Task> {
    const newTask = new Task(task.id, task.todo, task.priority);
    this.taskList.push(newTask);
    return of(task);
  }

  constructor() { }
}
