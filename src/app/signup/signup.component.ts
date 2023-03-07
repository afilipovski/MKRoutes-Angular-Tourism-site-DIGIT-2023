import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private authService : AuthenticationService,
    private location : Location
  ) {}

  email : string = "";
  password : string = "";
  confirmPassword : string = "";
  errmsg ?: string;

  signup() {
    if (this.password !== this.confirmPassword) {
      this.errmsg = "Passwords do not match"
      return
    }
    this.authService.signup(this.email, this.password).catch(aha => {
      this.errmsg = aha.code      
    })
  }

  ngOnInit() {
    this.authService.auth.user.subscribe(user => {
      if (user) {
        this.location.back()
      }
    })
  }
}
