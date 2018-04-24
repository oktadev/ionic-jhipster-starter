import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
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

  getSelectedIndex() {
    let page = location.hash.substring(location.hash.lastIndexOf('/') + 1);
    page = page.charAt(0).toUpperCase() + page.substring(1) + 'Page';
    const tabs = [this.tab1Root, this.tab2Root, this.tab3Root];
    const index = tabs.indexOf(page);
    const entitiesTab = tabs.indexOf(this.tab2Root);
    if (location.hash.includes('entities')) {
      return entitiesTab;
    } else if (index > -1) {
      return index;
    }
  }
}
