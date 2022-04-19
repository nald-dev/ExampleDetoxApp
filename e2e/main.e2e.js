describe('Main', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should showing the splashscreen', async () => {
    await expect(element(by.text('SplashScreen'))).toExist();
  });

  it('should able show the correct number in counter when incrementing / decrementing the number', async () => {
    await element(by.text('Start')).tap();

    await element(by.id('increment_button')).tap();
    await expect(element(by.text('1'))).toExist();

    for(let i = 0; i < 5; i++) {
      await element(by.id('decrement_button')).tap();
    }

    await expect(element(by.text('-4'))).toExist();

    for(let i = 0; i < 4; i++) {
      await element(by.id('increment_button')).tap();
    }

    await expect(element(by.text('0'))).toExist();
  });
});