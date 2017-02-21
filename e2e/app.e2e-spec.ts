import { NpmLinkAngularTestBasePage } from './app.po';

describe('npm-link-angular-test-base App', () => {
  let page: NpmLinkAngularTestBasePage;

  beforeEach(() => {
    page = new NpmLinkAngularTestBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
