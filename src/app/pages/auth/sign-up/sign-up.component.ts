import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/shared/constants/constant';
import { OptionsForm } from '../form/form.component';

@Component({
  selector: 'customers-sign-up',
  template: `<customers-form [options]="options"></customers-form>`,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  options: OptionsForm = {
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }
}
