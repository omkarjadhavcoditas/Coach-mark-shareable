/**
 * @packageDocumentation
 * @module Card
 */

import { html, customElement, property } from 'lit-element';
import styles from './card-css';
import { TranslationClass } from '@orxe-culture/lit';
import '@orxe-components/button';

/**
 * @noInheritDoc
 */
@customElement('orxe-card')
export default class OrxeCard extends TranslationClass {
  /**
   *
   * @memberof OrxeCard
   * This is used to give the type of a card(floating-card or default-card)
   */
  @property({ type: String, reflect: true, attribute: 'card-type' })
  cardType = 'default-card';

  /**
   *
   * @memberof OrxeCard
   * this property is used to show close icon on floating card
   */
  @property({ type: Boolean, reflect: true, attribute: 'close-icon' })
  closeIcon = false;

  /**
   *
   * @memberof OrxeCard
   * This property will set the aria-label for close icon
   */
  @property({ type: String, reflect: true, attribute: 'a11y-close-label' })
  a11yCloseLabel = '';

  render() {
    return html`
      <div data-testid="card-container" class="card__container" card-type=${this.cardType}>
        <slot></slot>
        ${this._renderCloseIcon()}
      </div>
    `;
  }

  /**
   * This method render the close icon if the card type is set to 'floating card'
   */
  private _renderCloseIcon() {
    if (this.cardType === 'floating-card' && this.closeIcon) {
      return html`
        <orxe-button
          class="button__icon--close"
          kind="iconOnly"
          icon="ic-close"
          icon-size="small"
          a11y-label=${this.a11yCloseLabel || this.t('orxe-card.ally_close_label')}
          data-testid="close-icon"
          @click=${this._destroyFloatingCard}
        >
        </orxe-button>
      `;
    }
  }

  /**
   * This methid will destroy the floating card, when user click on the close icon
   */
  private _destroyFloatingCard(): void {
    this.remove();
  }

  static styles = styles;
}




















// /**
//  * @packageDocumentation
//  * @module CoachMark
//  */

// import { html, customElement, property, query } from 'lit-element';
// import styles from './coach-mark-css';
// import { TranslationClass } from '@orxe-culture/lit';
// import '@orxe-components/button';

// /**
//  * @noInheritDoc
//  */
// @customElement('orxe-coach-mark')
// export default class OrxeCoachMark extends TranslationClass {
//   @query('#coach-mark-main') private coachMarkElement;
//   /**
//  *
//  * @memberof OrxeCoachMark
//  * This property will set the title for coach mark
//  */
//   @property({ type: String, reflect: true, attribute: 'title' })
//   title = '';

//   /**
//  *
//  * @memberof OrxeCoachMark
//  * This property will set the description/note for coach-mark
//  */
//   @property({ type: String, reflect: true, attribute: 'description' })
//   description = '';

//   constructor() {
//     super();
//     this.fadeCoachMark();
//   }
//   render() {
//     return html`
//     <div  data-testid="coach-mark-container"  id="coach-mark-main" class="main-container">
//       <p class="support-visual"></p>
//       <div class="coach__container">
//         <div class="title-bar-with-icon">
//           <label class="coach-mark-title">${this.title}</label>
//           <p> ${this._renderCloseIcon()}</p>
//         </div>
//         <p class="coach-body">${this.description}</p>
//       </div>
//     </div>
//     `;
//   }

//   /**
//    * This method render the close icon
//    */
//   private _renderCloseIcon() {
//     return html`
//         <orxe-button
//           class="button__icon--close"
//           kind="iconOnly"
//           icon="ic-close"
//           icon-size="small"
//           data-testid="close-icon"
//           ally-label="Close The Card"
//           @click=${this._destroyCoachMark}
//         >
//         </orxe-button>
//       `;
//   }

//   /**
//    * This methid will destroy the coach mark , when user click on the close icon
//    */
//   private _destroyCoachMark(): void {
//     this.coachMarkElement.classList.add('coach-mark-out');
//     setTimeout(() => {
//       this.remove();
//     }, 130);
//   }

//   private fadeCoachMark() {
//     setTimeout(() => {
//       this._destroyCoachMark();
//     }, 3000);
//   }
//   static styles = styles;
// }
// */