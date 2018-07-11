import { ChartjsDemoPage } from './app.po';

describe('chartjs-demo App', function() {
  let page: ChartjsDemoPage;

  beforeEach(() => {
    page = new ChartjsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
