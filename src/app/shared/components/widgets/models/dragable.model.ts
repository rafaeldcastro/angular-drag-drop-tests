import { BaseModel } from '@core/models/base.model';

export class Dragable extends BaseModel{

    isDragDisabled: boolean;
    dragTranslation: string;
    dragPosition: {x: number, y: number};
    dimension: {height: number, width: number};

    constructor(data: Object = {}) {
        super();
        this.set(data);
    }
}