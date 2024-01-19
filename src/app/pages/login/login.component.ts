import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  buttonLigth = ButtonType.light;

  constructor(private router: Router) {}

  validateForm() {
    this.router.navigateByUrl('/home');
  }
}
