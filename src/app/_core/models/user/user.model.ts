import { BaseModel } from './../base.model';

export class User extends BaseModel{

    id: number;
    cpf: string;
    foto: string | ArrayBuffer;
    telefone: string;
    email: string;
    senha: string;
    nome: string;
    data_nascimento: string;

    coparentes: User[];
    
    endereco: Endereco = Endereco.getNewEndereco();
    
    filhos: User[];
    
    perfil: Perfil;
    
    plano: Plano;

    diet;
    sleep_routine;
    extra_activities;
    sports;

    specifics;
    allergies;
    incidents;
    medicines;
    doctors;

    usuario_has_usuario: {
        responsavel_legal: boolean,
        parentesco: string
    }
    
    constructor(data: Object = {}) {
        super();
        this.set(data);
    }

    static getNewUser(): User {
        return new User({
            cpf: '',
            telefone: '',
            email: '',
            nome: '',
            foto: '',
            data_nascimento: new Date().toISOString(),
            endereco: Endereco.getNewEndereco(),
            usuario_has_usuario: {
                responsavel_legal: null,
                parentesco: ''
            }
        });
    }
}

export class Endereco extends BaseModel{

    id: number;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: Cidade;
    latitude: string;
    longitude: string;
    
    constructor(data: Object = {}) {
        super();
        this.set(data);
    }

    static getNewEndereco(): Endereco {
        return new Endereco({
            logradouro:"",
            numero:"",
            complemento:"",
            bairro:"",
            cep:"",
            cidade: Cidade.getNewCidade(),
            latitude:"",
            longitude:""
        });
    }
}

export class Cidade extends BaseModel{

    id: number;
    nome: string;
    uf: string;
    
    constructor(data: Object = {}) {
        super();
        this.set(data);
    }

    static getNewCidade(): Cidade {
        return new Cidade({
            nome: "",
            uf: ""
        });
    }
}

export enum PERFIL_CONSTANTS {
    ADMIN = 1,
    COPARENTE = 2,
    FILHO = 3
}

export class Perfil extends BaseModel{

    id: number;
    nome: string;
    
    constructor(data: Object = {}) {
        super();
        this.set(data);
    }
}

export class Plano extends BaseModel{

    id: number;
    nome: string;
    
    constructor(data: Object = {}) {
        super();
        this.set(data);
    }
}
