import { LanioPage } from './app.po';

describe('lanio App', () => {
  let page: LanioPage;

  beforeEach(() => {
    page = new LanioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
