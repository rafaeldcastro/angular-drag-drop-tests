import { FormGroup } from '@angular/forms';

/**SERVICES */
export class FormsBase {

    form: FormGroup;

    constructor() {
        this.form = new FormGroup({});
    }

    get formcontrol() {
        return this.form.controls;
    }

    protected canSubmit() {
        if (this.form.invalid) {
            return;
        }
    }
}
