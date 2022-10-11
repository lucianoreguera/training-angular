import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/shared/constants/constant';
import { OptionsForm } from '../form/form.component';

@Component({
  selector: 'customers-sign-in',
  template: `<customers-form [options]="options"></customers-form>`,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  options: OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn
  }
}
