import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  // HTTPサーバの URL (-> 今回は簡易的な HTTPサーバの json-server を使う)
  rscUrl = 'http://localhost:3000/task';

  // コンポーネントへデータを伝えるためのオブザーバー
  taskSubject = new BehaviorSubject<Task[]>([]);

  // タスクリストを返すメソッド
  //   配列を直接返さずに Observableオブジェクトを返すようにする.
  //   サービスからコンポーネントにデータを返す際の実践的な手法.
  getTaskList(): Observable<Task[]> {
    // HTTP/GET通信でデータ取得を行う
    //   引数は通信先の URL, 戻り値は RxJS の Observableオブジェクト
    this.http.get<Task[]>(this.rscUrl).subscribe(
      result => this.taskSubject.next(result)
      );
    return this.taskSubject.asObservable();
  }

  // 指定された id のタスクを返すメソッド
  getTask(id:string): Observable<Task> {
    return this.http.get<Task>(this.rscUrl + '/' + id);
  }

  // 新しいタスクを作るメソッド
  addTask(task:Task): Observable<Task> {
    // HTTP/POST通信に付与するヘッダー情報を作る
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // HTTP/POST通信でデータを送る
    //   引数は通信先の (URL, 送信データ, オプション情報), 戻り値は RxJS の Observableオブジェクト
    return this.http.post<Task>(this.rscUrl, task, httpOptions).pipe(
      tap( result => {
        // HTTP通信は一回のレスポンスで閉じてしまう(completeする). 
        // サービスとコンポーネント間の Observable を維持するために,
        // 変更前(preTaskArr) と変更後(result) を結合して, サービスでデータを保持できるようにする.
        const preTaskArr = this.taskSubject.getValue();
        this.taskSubject.next([...preTaskArr, result]);
        })
      );
  }

  constructor(private http:HttpClient) { }
}
