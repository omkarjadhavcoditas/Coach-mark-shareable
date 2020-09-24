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
