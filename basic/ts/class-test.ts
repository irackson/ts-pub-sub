import { Subscribable } from './Subscribable-class';

const sub = new Subscribable<string>();
const unsub = sub.subscribe(console.log);

sub.publish('Hello1');
sub.publish('Hello2');
sub.publish('Hello3');
sub.publish('Hello4');

unsub();

sub.publish("Doesn't log");

class DataClass extends Subscribable<number> {
    constructor(public value: number) {
        super();
    }

    setValue(v: number) {
        this.value = v;
        this.publish(v);
    }
}

const dc = new DataClass(0);
const dcUnsub = dc.subscribe((v: number) => console.log(`DC: ${v}`));
const dcUnsub2 = dc.subscribe((v: number) =>
    console.log(`DC2: ${v.toExponential(3)}`)
);

dc.setValue(42); // log twice
dcUnsub();
dc.setValue(20); // log once
dcUnsub2();
dc.setValue(50); // log zero
