import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'src/app/components/button/button.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  buttonLigth = ButtonType.light;

  constructor(private router: Router, private authService: AuthService) {}

  validateForm() {
    this.authService.authenticate();
    this.router.navigateByUrl('/home');
  }
}
