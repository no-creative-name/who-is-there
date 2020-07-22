import { newE2EPage } from '@stencil/core/testing';

describe('number-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<number-counter></number-counter>');

    const element = await page.find('number-counter');
    expect(element).toHaveClass('hydrated');
  });
});
