import { OrxeCoachMark } from '../index';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';

expect.extend(toHaveNoViolations);

describe('orxe-coach-mark-axe', () => {
  let coachMark;

  beforeEach(function () {
    OrxeCoachMark;
    document.body.appendChild(document.createElement('orxe-coach-mark'));
    coachMark = document.querySelector('orxe-coach-mark') as OrxeCoachMark;
  });

  afterEach(function () {
    coachMark.remove();
  });

  it('should support all WCAG Accessibility Rules. when component is rendered', async () => {
    // pass the HTML element into the axe function.
    const results = await axe(coachMark);
    expect(results).toHaveNoViolations();
  });

  // it('should support all WCAG Accessibility Rules. when closeIconAriaLabel is given', async () => {
  //   await coachMark.requestUpdate();
  //   const results = await axe(coachMark);
  //   expect(results).toHaveNoViolations();
  // });

  it('should support all WCAG Accessibility Rules. when coachMark title is given', async () => {
    coachMark.title = 'Title';
    await coachMark.requestUpdate();
    const results = await axe(coachMark);
    expect(results).toHaveNoViolations();
  });
});
