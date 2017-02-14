import { UclitestPage } from './app.po';

describe('uclitest App', function() {
  let page: UclitestPage;

  beforeEach(() => {
    page = new UclitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
