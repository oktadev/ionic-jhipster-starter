import { async, TestBed } from '@angular/core/testing';
import { Config, IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigMock, PlatformMock, SplashScreenMock, StatusBarMock } from 'ionic-mocks-jest';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';

// Translation trickery provided by @leemon20
// https://github.com/ngx-translate/core/issues/636#issuecomment-381131231
import * as en from '../assets/i18n/en.json';
import { Settings } from '../providers/settings/settings';

const TRANSLATIONS = {
  EN: en
};

class JsonTranslationLoader implements TranslateLoader {
  getTranslation(code: string = ''): Observable<object> {
    const uppercased = code.toUpperCase();
    return of(TRANSLATIONS[uppercased]);
  }
}

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MyApp],
        imports: [
          IonicModule.forRoot(MyApp),
          TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: JsonTranslationLoader }
          })
        ],
        providers: [
          {provide: StatusBar, useFactory: () => StatusBarMock.instance()},
          {provide: SplashScreen, useFactory: () => SplashScreenMock.instance()},
          {provide: Platform, useFactory: () => PlatformMock.instance()},
          {provide: Config, useFactory: () => ConfigMock.instance()},
          {provide: Settings, useFactory: () = {}}
        ]
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('should show welcome page', () => {
    expect(component.rootPage).toEqual('WelcomePage');
  });
});