import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/services/auth.services';

@Component({
  selector: 'customers-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user$ = this.authService.user$;

  constructor(private readonly authService: AuthService) { }

  async onLogout(): Promise<void> {
    try {
      await this.authService.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
