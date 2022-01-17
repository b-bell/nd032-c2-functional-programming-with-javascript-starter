// A function runs once and returns one set of information
// An observable is like a function that runs for a period of time and can return many sets of information - a stream of information

// An observable returns a stream of information
// An observer (here, observable.subscribe) is how we 'listen' or subscribe to data being returned by an observable.

const observable = new Rx.Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2); // "return" another value
    subscriber.next(3); // "return" another value
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('just before subscribe');

observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
});

console.log('just after subscribe');

// the word 'next' is a special RxJS observable word that allows the observable to "return" multiple things over a period of time

// There are threee types of values an Observable Execution can deliver:

// "Next" notification: sends a value such as a Number, a String, and Object, etc.
// "Error" notificaiton: sends a JavaScript Error or exception.
// "Complete" notification: does not send a value.

// "Next" notifications are the most important and most common type: they represent actual data being delivered to a subscriber.
// "Error" and "Complete" notifications may happen only once during the Observable Execustion, and there can only be either one of them.
