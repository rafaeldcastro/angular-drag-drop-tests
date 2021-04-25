import { Component, Input, Output, EventEmitter } from '@angular/core';

/**MODELS */
import { Subscription } from 'rxjs';
import { BaseModal } from './models/base-modal.model';

/**SERVICES */
import { MODAL_GENERIC_NOTIFICATIONS } from './notifications/loading.notifications';
import { EventEmitterService } from '@core/services/emitter/event-emitter.service';

@Component({
  selector: 'modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss']
})
export class ModalGenericComponent extends BaseModal{

  @Input() modalId: string = 'genericModal';
  @Input() confirmButtonText: string = 'Salvar';
  @Input() cancelButtonText: string = 'Fechar';
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();
  payload: any;
  private subscriptions = new Subscription();

  constructor() {
    super();
  }

  present(fixed?: boolean){
    super.present(fixed);
    this.subscriptions.add( EventEmitterService.get( MODAL_GENERIC_NOTIFICATIONS.SET_PAYLOAD )
      .subscribe(payload => this.setPayload(payload) ) );
  }

  dismiss(){
    super.dismiss();
    this.subscriptions.unsubscribe();
  }

  setPayload(payload){
    this.payload = payload;
  }

  onConfirmClick(){
    this.onConfirm.emit(this.payload);
  }

}
