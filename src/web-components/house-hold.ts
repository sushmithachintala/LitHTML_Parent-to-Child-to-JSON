import { html, LitElement } from "lit";
import { property, customElement } from 'lit/decorators.js';
import { HouseHoldModel } from "src/models/data-model";

@customElement('house-hold')
export class HouseHold extends LitElement {
    @property({ type: Object }) 
    HouseHold = {
        key: 'HOUSEHOLD',
        name: 'Household contents',
        comments: ''
    }
    _textChange(e: Event) {
        this.HouseHold.comments = (e.target as HTMLInputElement).value;
        this.dispatchEvent(
            new CustomEvent<HouseHoldModel>('updateHouseHold', {
                detail: this.HouseHold,
            })
        );
    }
    render() {
        return html`<textarea class='form-control' placeholder='Please enter Bicycle Comments' @keypress=${this._textChange}>${this.HouseHold.comments}</textarea>`;
    }
}