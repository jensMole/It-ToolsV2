import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Authprovider
import { AuthProvider } from '../../providers/auth/auth';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {
  }

  openPage(p){
    this.navCtrl.push(p);
  }

  LogOut(){

    this.auth.logoutUser().then( () => this.navCtrl.setRoot(LoginPage));
    
  }

}
