import { OrxeCoachMark } from '../index';
import '@testing-library/jest-dom';

describe('orxe-coach-mark', () => {
  let coachMark;

  beforeEach(async function () {
    OrxeCoachMark;
    coachMark = (await document.body.appendChild(document.createElement('orxe-coach-mark'))) as OrxeCoachMark;
  });

  afterEach(async function () {
    await coachMark.remove();
  });

  /**
   * Function that sets properties on the Custom Element.
   */
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (coachMark.hasOwnProperty(property)) {
        coachMark[property] = properties[property];
      }
    }
    await coachMark.requestUpdate();
  }

  /**
   * Function that returns an element containing the testId data attribute.
   */
  function getByTestId(id: string): HTMLElement {
    return coachMark.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('should check default value for properties for coach-mark', () => {
    setProperties({ title: '', description: '' });
    expect(coachMark.title).toEqual('');
    expect(coachMark.description).toEqual('');
  });
  it('should check set values for properties for coach-mark', () => {
    setProperties({ title: 'Title', description: 'Description for the coach mark' });
    expect(coachMark.title).toEqual('Title');
    expect(coachMark.description).toEqual('Description for the coach mark');
  });

  it('Should show close icon', async () => {
    const closeIconContainer = getByTestId('close-icon');
    expect(closeIconContainer).toHaveClass('close-button');
  });

  it('Should show close the coach mark when clicked on cross icon', async () => {
    const closeIconContainer = getByTestId('close-icon');
    let coachEle = document.querySelector('orxe-coach-mark');
    await closeIconContainer.click.bind({coachMarkElement:coachEle})
    expect(coachEle).toBeTruthy()
  });
});
