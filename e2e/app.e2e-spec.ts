import { AppPage } from './app.po';

describe('arq-inscription-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display PreInscripcion title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('PreInscripcion');
  });
});
