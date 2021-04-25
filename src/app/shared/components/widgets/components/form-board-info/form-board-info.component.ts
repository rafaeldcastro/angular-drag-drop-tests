import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/**MODELS */
import { FormsBase } from '@core/models/forms/forms.model';

@Component({
  selector: 'form-board-info',
  templateUrl: 'form-board-info.component.html',
  styleUrls: ['form-board-info.component.scss']
})
export class FormBoardInfo extends FormsBase {

  @Output() onConfirm: EventEmitter<any> = new EventEmitter();
  data: any;

  constructor() {
    super();

    this.form.addControl('title', new FormControl(
      (this.data && this.data.title) ? this.data.title : '',
      [Validators.minLength(4)])
    );

    this.form.addControl('content', new FormControl(
      (this.data && this.data.content) ? this.data.content : '',
      [Validators.minLength(4)])
    );
  }

  onSubmit() {
    super.canSubmit();

    let payload = {
      title: this.formcontrol.title.value,
      content: this.formcontrol.content.value
    }

    this.onConfirm.emit(payload);
  }

}