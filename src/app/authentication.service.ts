import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public auth: AngularFireAuth
  ) {}

  login(email : string, password : string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  signup(email : string, password : string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  logout() {
    this.auth.signOut();
  }
}
