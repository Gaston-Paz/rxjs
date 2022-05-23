import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('complete [obs]: ')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("Mundo");

    //Forzar error
    // const a = undefined;
    // a.nombre = "Gastón"; 

    //Ninguna emisión posterior se mostrará a los subscriptores
    subs.complete();
    subs.next("Hola");
    subs.next("Mundo");

});

// obs$.subscribe(resp => {
//     console.log("Next: ", resp)
// },
// error => {
//     console.warn("Error: ", error)
// },
// () => {
//     console.info("Complete")
// }
// );

obs$.subscribe(observer);


