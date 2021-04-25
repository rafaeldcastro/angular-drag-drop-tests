export class BaseModel {

    public set(attrs: Object): any {
        for (let i in attrs) { this[i] = attrs[i]; }
    }

    public get(attr: string): any {
        return this[attr];
    }
}