import { Modal } from 'bootstrap';
declare var bootstrap: any;

export class BaseModal  {

    modalId: string;
    protected modalInstance: Modal | undefined;

    constructor() {
    }

    present(fixed?: boolean){

        let options = fixed ? {backdrop:"static", keyboard: false}: {}

        this.modalInstance = new bootstrap.Modal(
            document.getElementById(`${this.modalId}`), options
        )

        this.modalInstance?.show();
    }

    dismiss() { 
        this.modalInstance?.hide();
    }
}