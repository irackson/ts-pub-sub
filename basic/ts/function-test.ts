import { createSubscribable } from './Subscribable-function';

const sub = createSubscribable<string>();
const unsub = sub.subscribe(console.log);

sub.publish('Hello1');
sub.publish('Hello2');
sub.publish('Hello3');
sub.publish('Hello4');

unsub();

sub.publish("Doesn't log");
