import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ACTIONS } from 'src/app/shared/constants/constant';
import { AuthService } from '../services/auth.services';
import { ApiError, User, UserCredentials } from '@supabase/supabase-js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface OptionsForm {
  id: string,
  label: string
}

interface UserResponse extends User, ApiError {}

@Component({
  selector: 'customers-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  authForm!: FormGroup;
  signIn!: 'Sign In';
  
  @Input() options!: OptionsForm;
  
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly fb: FormBuilder) { }
    

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit(): Promise<void> {
    const credentials: UserCredentials = this.authForm.value;
    let actionToCall;

    if (this.options.id === ACTIONS.signIn) {
      actionToCall = this.authService.signIn(credentials);
    } else {
      actionToCall = this.authService.signUp(credentials);
    }

    try {
      const result = await actionToCall as UserResponse;
      if (result.email) {
        this.redirectUser();
      } else {
        this.toastrService.info(result.message, 'Info');
      }
    } catch (error) {
      console.log(error);
    }

  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private redirectUser(): void {
    this.router.navigate(['/home']);
  }
}
