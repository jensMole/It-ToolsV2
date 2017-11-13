import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Authprovider
import { AuthProvider } from '../../providers/auth/auth';

import { LoginPage } from '../login/login';
import { VideoPage } from '../video/video';
import { AankondigingenPage } from '../aankondigingen/aankondigingen';
import { ChatPage } from '../chat/chat';
import { HomePage } from '../home/home';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  openPage(p){
    this.navCtrl.setRoot(p);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
