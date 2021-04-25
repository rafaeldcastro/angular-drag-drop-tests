//Para storage, o Capacitor já coloca o prefixo _cap_

const APP_PREFIX: string = 'ONBOARD';
const APP_LOCK_COUNTDOWN: number = 45000; //45 minutos
const INTRO_WAS_SEEN: string = 'INTRO_WAS_SEEN';
const HELLO_CHOICE_WAS_SEEN: string = 'HELLO_CHOICE_WAS_SEEN';
const TOUR_WAS_SEEN: string = 'TOUR_WAS_SEEN';
const USER: string = 'USER';
const USER_TOKEN: string = 'USER-TOKEN';

export const APP_CONSTANTS = {
    APP_PREFIX,
    TOUR_WAS_SEEN,
    INTRO_WAS_SEEN,
    HELLO_CHOICE_WAS_SEEN,
    APP_LOCK_COUNTDOWN,
    USER,
    USER_TOKEN
};