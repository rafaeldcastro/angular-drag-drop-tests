import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidators {

    static isValidCPF(control: AbstractControl): ValidationErrors | null {

        if (!control) return {};
        
        const regex = new RegExp("(?!(\\d)\\1{2}.\\1{3}.\\1{3}-\\1{2})\\d{3}[\\.\\s]\\d{3}[\\.\\s]\\d{3}[\\-]\\d{2}");
        const cpf: string = String(control.value);
        
        //if (regex.test(control.value)) return null; //Success

        if (!regex.test(cpf)) return { isValidCPF: true }; //Erro
        
        if ( CustomValidators.validateCPF( CustomValidators.sanitizeCPF(cpf) ) ) return null; //Success
        
        return { isValidCPF: true }; //Erro
    }

    private static sanitizeCPF(cpf): string{
        let x = cpf.replaceAll('.','').replaceAll('-','').replaceAll(' ','');
        return x;
    }
    
    //Receber: 12345678909 | Sem pontos ou hífen
    private static validateCPF(cpf: string, verificador?): boolean {
        let soma = 0;
        let resto;
        const x = verificador ? 0 : 1;

        for (let i = 1; i <= (9 + x); i++){
            soma = soma + parseInt(cpf.substring(i-1, i)) * ((11 + x) - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) { resto = 0; }
        if (resto != parseInt(cpf.substring((9 + x), (10 + x))) ) { return false; }

        if(!verificador) { return CustomValidators.validateCPF(cpf, true); }

        return true;
    }

    static mustMatchPassword(controls: AbstractControl): ValidationErrors | null {

        if (!controls) return {};

        const password = controls.get('password');
        const confirm_password = controls.get('confirm_password');

        if (confirm_password.errors && !confirm_password.errors.mustMatch) return {};

        if (password.value !== confirm_password.value) {
            confirm_password.setErrors({ mustMatch: true });
            return { mustMatch: true }; //Erro
        }
        confirm_password.setErrors(null);
        return null;//Success
    }

    /**
     * 
     * @param control 
     */
    static isValidEmail(control: AbstractControl): ValidationErrors | null {

        if (!control) return {};
        
        const regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        if (regex.test(control.value)) return null; //Success

        return { isValidEmail: true }; //Erro
    }

    static isValidPhone(control: AbstractControl): ValidationErrors | null {

        if (!control) return {};
        
        const regex = new RegExp("^[(]?(\\d{2})[)]?\\s?(\\d{4,5})\\s?-?\\s?(\\d{4})$");
        if (regex.test(control.value)) return null; //Success

        return { isValidPhone: true }; //Erro
    }
}
