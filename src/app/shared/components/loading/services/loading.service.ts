import { Injectable } from '@angular/core';

/**MODELS */
import { LOADING_NOTIFICATIONS } from './../notifications/loading.notifications';

/**SERVICES */
import { EventEmitterService } from '@core/services/emitter/event-emitter.service';

@Injectable({ 
    providedIn: 'root' 
})
export class Loading {

    static present(){
        EventEmitterService.get(LOADING_NOTIFICATIONS.IS_LOADING).emit(true); 
    }

    static dismiss(){
        EventEmitterService.get(LOADING_NOTIFICATIONS.IS_LOADING).emit(false); 
    }

}