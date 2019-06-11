import { Page } from '../pages/app.po';
import { browser, protractor } from 'protractor';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have the correct title', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });
  });
});
