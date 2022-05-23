import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('complete [obs]: ')
}

const intervalo$ = new Observable<number>(subs => {
    /// Crear un contador
    let cont = 0;
    const interval = setInterval(() => {
        cont++;
        subs.next(cont);
        console.log(cont)
    },1000);

    setTimeout(() => {
        subs.complete();
    },2500)

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);
subscription1.add(subscription2)
subscription1.add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe()
    // subscription2.unsubscribe()
    // subscription3.unsubscribe()
    console.log('Completado timeout')
},3000);

 