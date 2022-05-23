import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('complete [obs]: ')
};

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random())
    },1000);

    return () => clearInterval(intervalID);
});

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1',rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2',rnd));

/*
1-Casteo Múltiple
2-También es un Observer
3-Next, error, complete
*/
const subject$ = new Subject();
intervalo$.subscribe();