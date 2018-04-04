import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the signup form
  account: { login: string, email: string, firstName: string, lastName: string, password: string, langKey: string } = {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    langKey: 'en'
  };

  // Our translated text strings
  private signupErrorString: string;
  private signupSuccessString: string;
  private existingUserError: string;
  private invalidPasswordError: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get(['SIGNUP_ERROR', 'SIGNUP_SUCCESS',
      'EXISTING_USER_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe((values) => {
      this.signupErrorString = values.SIGNUP_ERROR;
      this.signupSuccessString = values.SIGNUP_SUCCESS;
      this.existingUserError = values.EXISTING_USER_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
    })
  }

  doSignup() {
    // set login to same as email
    this.account.login = this.account.email;
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe(() => {
      let toast = this.toastCtrl.create({
        message: this.signupSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(MainPage);
    }, (response) => {
      // Unable to sign up
      const error = JSON.parse(response.error);
      let displayError = this.signupErrorString;
      if (response.status === 400 && error.type.includes('already-used')) {
          displayError = this.existingUserError;
      } else if (response.status === 400 && error.message === 'error.validation'
          && error.fieldErrors[0].field === 'password' && error.fieldErrors[0].message === 'Size') {
          displayError = this.invalidPasswordError;
      }
      let toast = this.toastCtrl.create({
          message: displayError,
          duration: 3000,
          position: 'middle'
      });
      toast.present();
    });
  }
}
