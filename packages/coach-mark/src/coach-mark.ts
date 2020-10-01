/**
 * @packageDocumentation
 * @module CoachMark
 */

import { html, customElement, property, query, LitElement } from 'lit-element';
import styles from './coach-mark-css';

/**
 * @noInheritDoc
 */
@customElement('orxe-coach-mark')
export default class OrxeCoachMark extends LitElement {
  @query('#coach-mark-main') private coachMarkElement;
  /**
 *
 * @memberof OrxeCoachMark
 * This property will set the title for coach mark
 */
  @property({ type: String, reflect: true, attribute: 'title' })
  title = '';

  /**
 *
 * @memberof OrxeCoachMark
 * This property will set the description/note for coach-mark
 */
  @property({ type: String, reflect: true, attribute: 'description' })
  description = '';

  constructor() {
    super();
    this.fadeCoachMark();
  }
  render() {
    return html`
    <div  data-testid="coach-mark-container"  id="coach-mark-main" class="main-container">
      <p class="support-visual"></p>
      <div class="coach__container">
        <div class="title-bar-with-icon">
          <label class="coach-mark-title">${this.title}</label>
          <p data-testid="close-icon" class="close-button" @click="${this._destroyCoachMark}">
            <span class="close-button"> &#10005; </span> 
          </p>
        </div>
        <p class="coach-body">${this.description}</p>
      </div>
    </div>
    `;
  }

  /**
   * This methid will destroy the coach mark , when user click on the close icon
   */
  private _destroyCoachMark(): void {
    this.coachMarkElement.classList.add('coach-mark-out');
    setTimeout(() => {
      this.remove();
    }, 130);
  }

  private fadeCoachMark() {
    setTimeout(() => {
      this._destroyCoachMark();
    }, 3000);
  }
  static styles = styles;
}
