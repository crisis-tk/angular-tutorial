import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  log(msg:any) {
    // ブラウザのコンソールにログを出力する
    console.log(msg);
  }
}
