import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import fire auth.
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //ga niet naar de home pagina als je de app opstart.
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth) {
    
    //subscribe function, Voor na te gaan als de gebruiker is aangemeld of niet.
    const authObserver = afAuth.authState.subscribe( user => {
      if (user) { //als gebruiker al is aangemeld naar de homepage
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {//niet aangemeld naar de loginpage
        this.rootPage = 'LoginPage';
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

