import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss']
})
export class WelcomePage {

  login() {
    console.log('login');
  }

  signup() {
    console.log('signup');
  }
}
