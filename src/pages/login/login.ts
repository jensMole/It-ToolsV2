import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  LoadingController, 
  Loading, 
  AlertController} from 'ionic-angular';
//Valideren van forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Authprovider
import { AuthProvider } from '../../providers/auth/auth';

//nakijken als je een geldige email adres opgeeft.
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the LoginPage page.
 * 
 * Deze gaat nakijken als het form juist is ingevuld,
 * Zend de data naar de aunthenticatie service,
 * Geeft een laad scherm,
 * Als succesvol dan user naar homepage,
 * Als error dan error in alert.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loading: Loading;

  constructor(public navCtrl: NavController, public authData: AuthProvider, 
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

      //met required zeggen we dat deze verplicht zijn.
      //emailValidator gaat nagaan als het weldegelijk een email is.
      //Ook geven we hier de min. length op, dit omdat firebase dit vraagt.
      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, 
          EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), 
        Validators.required])]
      });

  }

  //als je je paswoord bent vergeten ga dan naar de page voor aanvragen reset passwoord.
  goToResetPassword(){
    this.navCtrl.push('ResetPasswordPage');
  }
  
  //voor een account aan te maken.
  createAccount(){
    this.navCtrl.push('SignupPage');
  }

  //als de gebruiker zich gaat aanmelden.
  loginUser(){
    //als het niet valid is.
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    //als het valid is.
    } else {
      //verkrijgen van email en passwoord.
      //als een error dan error tonen met een ok en cancel knop.
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        this.navCtrl.setRoot('HomePage');
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
  
      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
