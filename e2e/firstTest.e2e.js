import {device, expect, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    console.log(element(by.id('test')))
    await expect(element(by.id('test'))).toBeVisible();
  });
});
