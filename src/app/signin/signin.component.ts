import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(
    private authService: AuthenticationService
  ) { }

  loading = true;
  user ?: firebase.default.User | null;

  email : string = "";
  password : string = "";
  errMsg ?: string;

  login() {
    this.authService.login(this.email, this.password).catch(err => {
      this.errMsg = err.code;
    })
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.loading = true;
    this.authService.auth.user.subscribe(u => {
      this.user = u;
      this.loading = false;
    });
  }
}
