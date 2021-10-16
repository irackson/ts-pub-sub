"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscribable = void 0;
function createSubscribable() {
    var subscribers = new Set();
    return {
        subscribe: function (cb) {
            subscribers.add(cb);
            return function () {
                subscribers.delete(cb);
            };
        },
        publish: function (msg) {
            subscribers.forEach(function (cb) { return cb(msg); });
        },
    };
}
exports.createSubscribable = createSubscribable;
