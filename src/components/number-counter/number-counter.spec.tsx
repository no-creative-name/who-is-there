import { newSpecPage } from '@stencil/core/testing';
import { NumberCounter } from './number-counter';

describe('number-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeopleCounter],
      html: `<people-counter></people-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <people-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </people-counter>
    `);
  });
});
