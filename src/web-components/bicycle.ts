import { html, LitElement } from "lit";
import { property, customElement } from 'lit/decorators.js';
import { BicycleModel } from "src/models/data-model";

@customElement('bicycle-comp')
export class Bicycle extends LitElement {

    Bicycle: BicycleModel = {
        key: 'BICYCLE',
        name: 'Bicycle',
        comments: ''
    }
    _textChange(e: Event) {
        this.Bicycle.comments = (e.target as HTMLInputElement).value;
        this.dispatchEvent(
            new CustomEvent<BicycleModel>('updateBicycle', {
                detail: this.Bicycle,
            })
        );
    }
    render() {
        return html`<textarea placeholder='Please enter Bicycle Comments' @change=${this._textChange}>${this.Bicycle.comments}</textarea>`;
    }
}