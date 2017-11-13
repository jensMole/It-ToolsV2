import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Authprovider
import { AuthProvider } from '../../providers/auth/auth';

import { LoginPage } from '../login/login';
import { VideoPage } from '../video/video';
import { AankondigingenPage } from '../aankondigingen/aankondigingen';
import { ChatPage } from '../chat/chat';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {
  }

  openPage(p){
    this.navCtrl.push(p);
    // this.navCtrl.setRoot(p);
  }

  LogOut(){

    this.auth.logoutUser().then( () => this.navCtrl.setRoot(LoginPage));
    
  }

}
