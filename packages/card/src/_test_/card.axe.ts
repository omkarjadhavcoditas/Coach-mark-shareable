import { OrxeCard } from '../index';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';

expect.extend(toHaveNoViolations);

describe('orxe-card-axe', () => {
  let card;

  beforeEach(function() {
    OrxeCard;
    document.body.appendChild(document.createElement('orxe-card'));
    card = document.querySelector('orxe-card') as OrxeCard;
  });

  afterEach(function() {
    card.remove();
  });

  it('should support all WCAG Accessibility Rules. when component is rendered', async () => {
    // pass the HTML element into the axe function.
    const results = await axe(card);
    expect(results).toHaveNoViolations();
  });

  it('should support all WCAG Accessibility Rules. when closeIconAriaLabel is given', async () => {
    card.closeIcon = true;
    card.a11yCloseLabel = 'close icon';
    card.cardType = 'floating-card';
    await card.requestUpdate();
    const results = await axe(card);
    expect(results).toHaveNoViolations();
  });

  it('should support all WCAG Accessibility Rules. when cardType is given', async () => {
    card.cardType = 'default-card';
    await card.requestUpdate();
    const results = await axe(card);
    expect(results).toHaveNoViolations();
  });
});
