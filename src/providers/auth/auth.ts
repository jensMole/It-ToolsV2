import { Injectable } from '@angular/core';
//alles afhandelen van firebase authenticatie.
import { AngularFireAuth } from 'angularfire2/auth';
//import firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {}

  //als een gebruiker al aangemeld is geweest.
  //Het gebruikt de login en email en logt dan in.
  loginUser(newEmail: string, newPassword: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
  }

  //resetten van het wachtwoord. Maakt gebruik van een email
  //en zend het paswoord via mail.
  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  //gebruiker afmelden.
  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  //gebruikers kunnen een account aanmaken.
  //men geeft de mail en passwoord mee.
  signupUser(newEmail: string, newPassword: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
  }

}
