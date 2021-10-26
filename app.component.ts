
import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { data } from 'src/app/utils/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public title = 'todoApp';
  appData: any;
  constructor() {
    this.appData = { ...data, appname: this.title };
  }
}