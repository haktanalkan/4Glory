import {Component} from 'angular2/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
  	template: `
  		First name: <input type="text" [(ngModel)]=name><br>
  		Last name: <input type="text" [(ngModel)]=surname><br>
		<button (click)="onClickMe()">Write To Console</button>`,
})

export class AppComponent {

name:string='';
surname:string='';
  onClickMe() {
    console.log(this.name);
    console.log(this.surname);
  }
}
