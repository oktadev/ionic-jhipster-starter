import { Page } from '../pages/app.po';
import { browser, protractor } from 'protractor';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/#/home');
    });

    it('should redirect to welcome', () => {
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('/#/login'), 5000);
    });

    it('should have the correct title', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Welcome, Java Hipster!');
      });
    });
  });
});