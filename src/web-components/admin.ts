import { html, LitElement } from "lit";
import { property, customElement } from 'lit/decorators.js';
import { AdminModel } from "src/models/data-model";

@customElement('admin-comp')
export class AdminComponent extends LitElement {
    admin: AdminModel = {
        validForm: new Date()
    }
    _dateChanged(e: Event) {
        const utcDate = (e.target as HTMLInputElement).valueAsDate;
        this.admin.validForm = utcDate;
        this.dispatchEvent(
            new CustomEvent<AdminModel>('update', {
                detail: this.admin,
            })
        );
    }
    render() {

        return html`<input type='date' @change=${this._dateChanged}/>`
    }


}