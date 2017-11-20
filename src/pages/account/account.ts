import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public myperson = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createPerson(firstName: string, lastName: string): void{    
    const personRef: firebase.database.Reference = 
      firebase.database().ref('/person1/');

    personRef.set({

      firstName,
      lastName

    })    
  }

  updatePerson(firstName: string, lastName: string): void{    
    const personRef: firebase.database.Reference = 
      firebase.database().ref('/person1/');

    personRef.update({

      firstName,
      lastName

    })    
  }

  ionViewDidLoad() {
    const personRef: firebase.database.Reference = 
      firebase.database().ref('/person/');
    personRef.on('value', personSnapshot => {
        myPerson = personSnapshot.val();
  }

}
