// import { expect } from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    console.log(element(by.id('tabTitleOne')))
    await expect(element(by.id('tabTitleOne'))).toBeVisible();
  });
});
