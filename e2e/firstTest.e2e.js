import { device, expect } from 'detox';

const sleep = duration =>
    new Promise(resolve => setTimeout(() => resolve(), duration));

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await sleep(3000)
    await expect(element(by.id('test'))).toBeVisible();
  });
});
