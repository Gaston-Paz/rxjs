import { fromEvent } from 'rxjs';

const obs$ = fromEvent<MouseEvent>(document,'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next',val)  
};

// obs$.subscribe(evento => {
//     console.log(evento.x);
//     console.log(evento.y);
    
    
// })
obs$.subscribe(({x,y}) => {
    console.log(x,y);  
})
obs2$.subscribe(evento => {
    console.log(evento.key);
    
})
