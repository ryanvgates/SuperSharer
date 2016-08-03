import { SuperSharerPage } from './app.po';

describe('super-sharer App', function() {
  let page: SuperSharerPage;

  beforeEach(() => {
    page = new SuperSharerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
