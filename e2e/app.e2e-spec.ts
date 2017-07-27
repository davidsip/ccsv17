import { CcsvWebPage } from './app.po';

describe('ccsv-web App', () => {
  let page: CcsvWebPage;

  beforeEach(() => {
    page = new CcsvWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
