import { Component } from '@angular/core';
import { IOptions } from './options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values: IOptions[] = [
    {value: 'option1', label: 'View only'},
    {value: 'option2', label: 'No access'},
    {value: 'option1', label: 'Full Access'}
    ];
}
