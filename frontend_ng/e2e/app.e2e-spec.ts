import { FrontendNgPage } from './app.po';

describe('frontend-ng App', function() {
  let page: FrontendNgPage;

  beforeEach(() => {
    page = new FrontendNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
