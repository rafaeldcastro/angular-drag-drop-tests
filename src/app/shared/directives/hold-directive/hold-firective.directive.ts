import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil, tap, filter } from 'rxjs/operators';

@Directive({
    selector: '[holdable]'
})
export class HoldableDirective {

    /**
     * HOW TO USE
     * 
     * <div holdable [holdTime]="500" (onHold)="holdHandler(anything)"></div> 
     */

    //Optional, without it the Emit() will be fired every 100ms
    @Input() holdTime: number;
    @Output() onHold: EventEmitter<number> = new EventEmitter();
    state: Subject<string> = new Subject();
    cancel: Observable<string>;

    constructor() {
        this.cancel = this.state
            .pipe(
                filter(v => v === 'cancel'),
                // tap(v => this.onHold.emit(0))
            );
    }

    @HostListener('mouseup', ['$event'])
    @HostListener('mouseleave', ['$event'])
    onExit() {
        this.state.next('cancel');
    }

    @HostListener('mousedown', ['$event'])
    startHold() {
        this.state.next('start');
        const n = 100;
        interval(n)
            .pipe(
                takeUntil(this.cancel),
                tap(v => {
                    if (this.holdTime) {
                        if (v * n >= this.holdTime) {
                            this.onHold.emit(v * n);
                            this.state.next('cancel');
                        }
                    } else {
                        this.onHold.emit(v * n);
                    }
                })
            )
            .subscribe();
    }
}