import { Component } from '@angular/core';
import { IOptions } from './options';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  createUserForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl(''),
    }
  );

  public onReset(form: FormGroup): void {
    form.reset();
  }
  public onSubmit(form: FormGroup): void {
    alert('Invite to: ' + form.controls.name.value + ' sent');
  }
}
