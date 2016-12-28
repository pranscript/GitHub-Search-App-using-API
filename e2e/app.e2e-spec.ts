import { GithubappPage } from './app.po';

describe('githubapp App', function() {
  let page: GithubappPage;

  beforeEach(() => {
    page = new GithubappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
