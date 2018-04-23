import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('tabs') tabRef: Tabs;
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });
  }

  ionViewWillEnter() {
    let page = location.hash.substring(location.hash.lastIndexOf('/') + 1);
    page = page.charAt(0).toUpperCase() + page.substring(1) + 'Page';
    const tabs = [this.tab1Root, this.tab2Root, this.tab3Root];
    const index = tabs.indexOf(page);
    if (index !== -1) {
      this.tabRef.select(index);
    }
    if (location.hash.includes('entities')) {
      this.tabRef.select(tabs.indexOf(this.tab2Root));
    }
  }
}
