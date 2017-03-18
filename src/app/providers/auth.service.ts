import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) { }

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup, // This is to pop up the form in a modal look up how to change this
    });
  }

  logout() {
    return this.af.auth.logout();
  }

}
